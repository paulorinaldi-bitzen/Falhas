import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { PlayerPrismaService } from '../../database/prisma/player-prisma.service';
import { UserChangeLogsService } from './user-change-logs.service';

@Injectable()
export class UsersRepository {
  constructor(
    private prisma: PrismaService,
    private playerPrisma: PlayerPrismaService,
    private userChangeLogsService: UserChangeLogsService,
  ) {}

  async findByEmail(email: string, limit: number = 50) {
    return this.prisma.aspNetUsers.findMany({
      where: {
        Email: {
          contains: email,
          mode: 'insensitive',
        },
      },
      include: {
        Profiles: true,
      },
      take: limit,
    });
  }

  async findByProfileId(profileId: string, limit: number = 50) {
    return this.prisma.aspNetUsers.findMany({
      where: {
        ProfileId: profileId,
      },
      include: {
        Profiles: true,
      },
      take: limit,
    });
  }

  async findByCPF(cpf: string, limit: number = 50) {
    // Normalizar CPF (remover pontuação) para busca mais confiável
    const normalizedCpf = cpf.replace(/[.\-\s\(\)]/g, '');
    
    return this.prisma.aspNetUsers.findMany({
      where: {
        Profiles: {
          CpfCnpj: {
            contains: normalizedCpf,
          },
        },
      },
      include: {
        Profiles: true,
      },
      take: limit,
    });
  }

  async findByPhone(phone: string, limit: number = 50) {
    // Normalizar telefone (remover todos os caracteres não numéricos) para busca parcial
    const normalizedPhone = phone.replace(/\D/g, '');
    
    if (normalizedPhone.length === 0) {
      return [];
    }
    
    // Buscar usuários onde o telefone contém o número buscado
    // Primeiro buscar em Profiles.Phone
    const profiles = await this.prisma.profiles.findMany({
      where: {
        Phone: {
          contains: normalizedPhone,
        },
      },
      include: {
        AspNetUsers: true,
      },
      take: limit,
    });

    // Extrair os usuários dos profiles
    const usersFromProfiles = profiles.flatMap(p => p.AspNetUsers);

    // Buscar também em AspNetUsers.PhoneNumber
    const usersByPhoneNumber = await this.prisma.aspNetUsers.findMany({
      where: {
        PhoneNumber: {
          contains: normalizedPhone,
        },
      },
      include: {
        Profiles: true,
      },
      take: limit,
    });

    // Combinar resultados sem duplicatas
    const combinedUsers = new Map();
    
    usersFromProfiles.forEach(user => {
      combinedUsers.set(user.Id, user);
    });

    usersByPhoneNumber.forEach(user => {
      combinedUsers.set(user.Id, user);
    });

    // Buscar os Profiles para usuários que vieram de AspNetUsers.PhoneNumber
    const userIdsNeedingProfiles = Array.from(combinedUsers.values())
      .filter(u => !u.Profiles)
      .map(u => u.Id);

    if (userIdsNeedingProfiles.length > 0) {
      const usersWithProfiles = await this.prisma.aspNetUsers.findMany({
        where: {
          Id: {
            in: userIdsNeedingProfiles,
          },
        },
        include: {
          Profiles: true,
        },
      });

      usersWithProfiles.forEach(user => {
        combinedUsers.set(user.Id, user);
      });
    }

    return Array.from(combinedUsers.values()).slice(0, limit);
  }

  async findSubscriptionDetailsByLookupIds(lookupIds: string[]): Promise<any[]> {
    const uniqueIds = [...new Set(lookupIds.map((id) => id.trim()).filter(Boolean))];
    if (uniqueIds.length === 0) {
      return [];
    }

    const uuidList = uniqueIds.map((id) => `'${id}'`).join(',');

    // Usar query raw simples selecionando apenas campos específicos
    const query = `
      SELECT 
        u."IdPonyAccount" as "idPonyAccount",
        u."Id" as "playerUserId",
        sd."Id" as id,
        sd."SubscriptionId" as "subscriptionId",
        sd."PaymentStatus" as status,
        sd."StartDate" as "startDate",
        sd."EndDate" as "endDate",
        sd."Store" as "store",
        sd."GatewayTransactionId" as "gatewayTransactionId"
      FROM "Users" u
      INNER JOIN "Subscriptions" s ON u."SubscriptionId" = s."Id"
      INNER JOIN "SubscriptionDetails" sd ON s."Id" = sd."SubscriptionId"
      WHERE (
        u."IdPonyAccount" IN (${uuidList})
        OR u."Id" IN (${uuidList})
      )
        AND u."Excluded" = false
        AND sd."Excluded" = false
        AND s."Excluded" = false
      ORDER BY sd."StartDate" DESC
    `;

    const results = await this.playerPrisma.$queryRawUnsafe(query) as any[];
    
    // Converter campos numéricos para números
    return results.map(row => ({
      ...row,
      id: typeof row.id === 'string' ? parseInt(row.id, 10) : row.id,
      status: typeof row.status === 'string' ? parseInt(row.status, 10) : row.status,
      store: typeof row.store === 'string' ? parseInt(row.store, 10) : row.store,
    }));
  }

  async findById(userId: string) {
    return this.prisma.aspNetUsers.findUnique({
      where: {
        Id: userId,
      },
      include: {
        Profiles: true,
      },
    });
  }

  async updateUser(userId: string, updateData: {
    email?: string;
    cpfCnpj?: string;
    phone?: string;
    startDate?: string;
    endDate?: string;
  }, adminId?: string, adminEmail?: string) {
    const user = await this.prisma.aspNetUsers.findUnique({
      where: { Id: userId },
      include: { Profiles: true },
    });

    if (!user) {
      throw new Error('User not found');
    }

    // Capture changes for logging
    const changes: Array<{ field: string; before: string; after: string }> = [];

    // Update AspNetUsers.Email
    if (updateData.email !== undefined) {
      if (user.Email !== updateData.email) {
        changes.push({ field: 'email', before: user.Email || '', after: updateData.email });
      }
      await this.prisma.aspNetUsers.update({
        where: { Id: userId },
        data: { Email: updateData.email },
      });
    }

    // Update Profiles.CpfCnpj and Profiles.Phone
    if (updateData.cpfCnpj !== undefined || updateData.phone !== undefined) {
      if (user.Profiles) {
        if (updateData.cpfCnpj !== undefined && user.Profiles.CpfCnpj !== updateData.cpfCnpj) {
          changes.push({ field: 'cpfCnpj', before: user.Profiles.CpfCnpj || '', after: updateData.cpfCnpj });
        }
        if (updateData.phone !== undefined && user.Profiles.Phone !== updateData.phone) {
          changes.push({ field: 'phone', before: user.Profiles.Phone || '', after: updateData.phone });
        }
        await this.prisma.profiles.update({
          where: { Id: user.Profiles.Id },
          data: {
            ...(updateData.cpfCnpj !== undefined && { CpfCnpj: updateData.cpfCnpj }),
            ...(updateData.phone !== undefined && { Phone: updateData.phone }),
          },
        });
      }
    }

    // Update SubscriptionDetails.StartDate and EndDate (from player-db)
    if (updateData.startDate !== undefined || updateData.endDate !== undefined) {
      const lookupIds = [userId, user.ProfileId].filter(Boolean);
      
      // Get the subscription details for this user
      const subscriptionDetails = await this.findSubscriptionDetailsByLookupIds(lookupIds);
      
      if (subscriptionDetails.length > 0) {
        // Update the most recent subscription detail
        const mostRecentDetail = subscriptionDetails[0];
        
        const updateFields: any = {};
        if (updateData.startDate !== undefined) {
          const startDateStr = mostRecentDetail.StartDate ? mostRecentDetail.StartDate.toISOString().split('T')[0] : '';
          if (startDateStr !== updateData.startDate) {
            changes.push({ field: 'startDate', before: startDateStr, after: updateData.startDate });
          }
          // Parse date as local time to avoid timezone issues
          const [year, month, day] = updateData.startDate.split('-').map(Number);
          updateFields.StartDate = new Date(year, month - 1, day);
        }
        if (updateData.endDate !== undefined) {
          const endDateStr = mostRecentDetail.EndDate ? mostRecentDetail.EndDate.toISOString().split('T')[0] : '';
          if (endDateStr !== updateData.endDate) {
            changes.push({ field: 'endDate', before: endDateStr, after: updateData.endDate || '' });
          }
          if (updateData.endDate) {
            const [year, month, day] = updateData.endDate.split('-').map(Number);
            updateFields.EndDate = new Date(year, month - 1, day);
          } else {
            updateFields.EndDate = null;
          }
        }

        if (Object.keys(updateFields).length > 0) {
          await this.playerPrisma.subscriptionDetails.update({
            where: { Id: mostRecentDetail.id },
            data: updateFields,
          });
        }
      }
    }

    // Log changes to Firebase if there are any and admin info is provided
    if (changes.length > 0 && adminId && adminEmail) {
      await this.userChangeLogsService.logUserChange({
        adminId,
        adminEmail,
        userId,
        userName: user.Profiles ? `${user.Profiles.Name} ${user.Profiles.SurName}` : user.UserName || 'Unknown',
        userEmail: user.Email || '',
        changedAt: new Date(),
        changes,
      });
    }

    // Return the updated user
    return this.findById(userId);
  }
}
