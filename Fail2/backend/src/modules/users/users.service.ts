import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@generated/player-db';
import { SearchUsersDto, UserSearchField } from './dto/search-users.dto';
import { UpdateUserEmailDto } from './dto/update-user-email.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async searchUsers(payload: SearchUsersDto) {
    const searchValue = this.normalizeSearchValue(payload.field, payload.value);
    const users = await this.usersRepository.searchAuthUsers(payload.field, searchValue);

    return Promise.all(users.map((user) => this.enrichUser(user)));
  }

  async getSubscriptionByPoneyAccountId(poneyAccountId: string) {
    const user = await this.usersRepository.findAppUserById(poneyAccountId);

    return {
      subscriptionId: user?.SubscriptionId ?? null,
    };
  }

  async updateUserEmail(payload: UpdateUserEmailDto) {
    try {
      await this.usersRepository.updateAuthUserEmail(payload.userId.trim(), payload.newEmail.trim());

      return {
        success: true,
        message: 'Email atualizado com sucesso.',
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new NotFoundException('User ID não encontrado.');
      }

      throw error;
    }
  }

  private normalizeSearchValue(field: UserSearchField, value: string) {
    if (field === UserSearchField.CPF || field === UserSearchField.PHONE) {
      return value.replace(/[\s.-]/g, '');
    }

    if (field === UserSearchField.EMAIL) {
      return value.replace(/\s/g, '');
    }

    return value;
  }

  private async enrichUser(user: {
    Id: string;
    Email: string | null;
    PhoneNumber: string | null;
    ProfileId: string | null;
    UserAddressId: string | null;
  }) {
    const [profile, address, appUserByPoneyAccount] = await Promise.all([
      this.usersRepository.findProfileById(user.ProfileId),
      this.usersRepository.findAddressById(user.UserAddressId),
      this.usersRepository.findAppUserByPoneyAccount(user.Id),
    ]);

    const idDoPoneyAccount = appUserByPoneyAccount?.Id ?? null;
    const appUser = idDoPoneyAccount ? await this.usersRepository.findAppUserById(idDoPoneyAccount) : null;
    const subscriptionId = appUser?.SubscriptionId ?? null;
    const [subscription, subscriptionDetails] = await Promise.all([
      this.usersRepository.findSubscriptionSummary(subscriptionId),
      this.usersRepository.findSubscriptionDetails(subscriptionId),
    ]);

    return {
      id: user.Id,
      name: profile?.Name ?? null,
      email: user.Email,
      cpf: profile?.CpfCnpj ?? null,
      phone: user.PhoneNumber ?? profile?.Phone ?? null,
      profile_id: user.ProfileId,
      cep: address?.PostalCode ?? null,
      country: address?.Country ?? null,
      id_do_poney_account: idDoPoneyAccount,
      subscription: subscription
        ? {
            id: subscription.id,
            type: subscription.plan_type,
            plan: subscription.plan_type,
            platform: subscription.store ?? subscription.gateway_id,
            status: subscription.status,
            is_courtesy: subscription.courtesy,
            start_date: subscription.start_date,
            end_date: subscription.end_date,
            transaction_id: subscription.transaction_id,
            subscription_id: subscription.id,
          }
        : null,
      subscription_details: subscriptionDetails,
    };
  }
}
