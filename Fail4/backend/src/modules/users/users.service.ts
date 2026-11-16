import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { SearchUserDto } from './dto/search-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchUsersResponse, UserResponse } from './interfaces/user-response.interface';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';
import {
  getPoneiUserLookupIds,
  normalizeUuid,
} from './utils/player-user-link.util';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly subscriptionsService: SubscriptionsService,
  ) {}

  private normalizeCPF(cpf: string): string {
    return cpf.replace(/[.\-\s\(\)]/g, '');
  }

  private normalizePhone(phone: string): string {
    return phone.replace(/[.\-\s\(\)]/g, '');
  }

  private mapSubscriptionDetailRow(detail: any) {
    return {
      id: typeof detail.id === 'string' ? parseInt(detail.id, 10) : detail.id,
      subscriptionId: detail.subscriptionId,
      status: typeof detail.status === 'string' ? parseInt(detail.status, 10) : detail.status,
      startDate: detail.startDate,
      endDate: detail.endDate,
      store: typeof detail.store === 'string' ? parseInt(detail.store, 10) : detail.store,
      gatewayTransactionId: detail.gatewayTransactionId,
    };
  }

  private buildSubscriptionDetailsMap(
    rows: any[],
  ): Map<string, ReturnType<UsersService['mapSubscriptionDetailRow']>[]> {
    const map = new Map<
      string,
      ReturnType<UsersService['mapSubscriptionDetailRow']>[]
    >();

    for (const row of rows) {
      const detail = this.mapSubscriptionDetailRow(row);
      const keys = [row.idPonyAccount, row.playerUserId]
        .filter(Boolean)
        .map(normalizeUuid);

      for (const key of keys) {
        if (!map.has(key)) {
          map.set(key, []);
        }
        map.get(key)!.push(detail);
      }
    }

    return map;
  }

  private getSubscriptionDetailsForUser(
    user: { Id: string; ProfileId?: string | null; Profiles?: { Id: string } | null },
    detailsMap: Map<string, ReturnType<UsersService['mapSubscriptionDetailRow']>[]>,
  ) {
    for (const lookupId of getPoneiUserLookupIds(user)) {
      const details = detailsMap.get(lookupId);
      if (details?.length) {
        return details;
      }
    }
    return [];
  }

  async searchUsers(dto: SearchUserDto): Promise<SearchUsersResponse> {
    const { field, value } = dto;
    const limit = 50;

    let normalizedValue = value;

    if (field === 'cpf') {
      normalizedValue = this.normalizeCPF(value);
    } else if (field === 'phone') {
      normalizedValue = this.normalizePhone(value);
    }

    let users: any[];

    switch (field) {
      case 'email':
        users = await this.usersRepository.findByEmail(value, limit);
        break;
      case 'cpf':
        users = await this.usersRepository.findByCPF(normalizedValue, limit);
        break;
      case 'phone':
        users = await this.usersRepository.findByPhone(normalizedValue, limit);
        break;
      case 'profileId':
        users = await this.usersRepository.findByProfileId(normalizedValue, limit);
        break;
      default:
        throw new BadRequestException(`Campo inválido: ${field}`);
    }

    const allLookupIds = [
      ...new Set(users.flatMap((user) => getPoneiUserLookupIds(user))),
    ];

    let subscriptionDetailRows: any[] = [];
    try {
      subscriptionDetailRows =
        await this.usersRepository.findSubscriptionDetailsByLookupIds(
          allLookupIds,
        );
    } catch (error) {
      console.error('Erro ao buscar SubscriptionDetails (banco player-db):', error);
      // Continua sem SubscriptionDetails se houver erro
    }

    const subscriptionDetailsMap =
      this.buildSubscriptionDetailsMap(subscriptionDetailRows);

    const subscriptionsMap = new Map<string, Awaited<
      ReturnType<SubscriptionsService['getSubscriptionByLookupIds']>
    >>();

    for (const user of users) {
      const lookupIds = getPoneiUserLookupIds(user);
      const subscription =
        await this.subscriptionsService.getSubscriptionByLookupIds(lookupIds);
      if (subscription) {
        subscriptionsMap.set(user.Id, subscription);
      }
    }

    const formattedUsers = users.map((user: any) => ({
      id: user.Id,
      email: user.Email,
      username: user.UserName,
      profileId: user.ProfileId,
      profile: user.Profiles
        ? {
            id: user.Profiles.Id,
            name: user.Profiles.Name,
            cpf: user.Profiles.CpfCnpj,
            phone: user.Profiles.Phone,
          }
        : null,
      subscriptionDetails: this.getSubscriptionDetailsForUser(
        user,
        subscriptionDetailsMap,
      ),
      subscription: subscriptionsMap.get(user.Id) || null,
    }));

    return {
      users: formattedUsers,
    };
  }

  async getUserById(userId: string): Promise<UserResponse> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const lookupIds = getPoneiUserLookupIds(user);

    const detailRows = (await this.usersRepository.findSubscriptionDetailsByLookupIds(
      lookupIds,
    )) as Array<{
      idPonyAccount: string | null;
      playerUserId: string;
      id: number;
      subscriptionId: string;
      status: number;
      startDate: Date;
      endDate: Date | null;
      store: number;
      gatewayTransactionId: string;
    }>;

    const detailsMap = this.buildSubscriptionDetailsMap(detailRows);
    const subscriptionDetails = this.getSubscriptionDetailsForUser(user, detailsMap);

    const subscription =
      await this.subscriptionsService.getSubscriptionByLookupIds(lookupIds);

    return {
      id: user.Id,
      email: user.Email || '',
      username: user.UserName || '',
      profileId: user.ProfileId || '',
      profile: user.Profiles
        ? {
            id: user.Profiles.Id,
            name: user.Profiles.Name,
            cpf: user.Profiles.CpfCnpj,
            phone: user.Profiles.Phone,
          }
        : null,
      subscriptionDetails,
      subscription,
    };
  }

  async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<UserResponse> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const updateData: any = {};
    if (updateUserDto.email !== undefined) {
      updateData.email = updateUserDto.email;
    }
    if (updateUserDto.cpfCnpj !== undefined) {
      updateData.cpfCnpj = updateUserDto.cpfCnpj;
    }
    if (updateUserDto.phone !== undefined) {
      updateData.phone = updateUserDto.phone;
    }
    if (updateUserDto.startDate !== undefined) {
      updateData.startDate = updateUserDto.startDate;
    }
    if (updateUserDto.endDate !== undefined) {
      updateData.endDate = updateUserDto.endDate;
    }

    const updatedUser = await this.usersRepository.updateUser(
      userId,
      updateData,
      updateUserDto.adminId,
      updateUserDto.adminEmail,
    );

    const lookupIds = getPoneiUserLookupIds(updatedUser);

    const detailRows = (await this.usersRepository.findSubscriptionDetailsByLookupIds(
      lookupIds,
    )) as Array<{
      idPonyAccount: string | null;
      playerUserId: string;
      id: number;
      subscriptionId: string;
      status: number;
      startDate: Date;
      endDate: Date | null;
      store: number;
      gatewayTransactionId: string;
    }>;

    const detailsMap = this.buildSubscriptionDetailsMap(detailRows);
    const subscriptionDetails = this.getSubscriptionDetailsForUser(updatedUser, detailsMap);

    const subscription =
      await this.subscriptionsService.getSubscriptionByLookupIds(lookupIds);

    return {
      id: updatedUser.Id,
      email: updatedUser.Email || '',
      username: updatedUser.UserName || '',
      profileId: updatedUser.ProfileId || '',
      profile: updatedUser.Profiles
        ? {
            id: updatedUser.Profiles.Id,
            name: updatedUser.Profiles.Name,
            cpf: updatedUser.Profiles.CpfCnpj,
            phone: updatedUser.Profiles.Phone,
          }
        : null,
      subscriptionDetails,
      subscription,
    };
  }
}
