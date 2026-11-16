import { Injectable } from '@nestjs/common';
import { Prisma } from '@generated/player-db';
import { PrismaService } from '../../database/prisma.service';
import { UserSearchField } from './dto/search-users.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async searchAuthUsers(field: UserSearchField, value: string) {
    if (field === UserSearchField.EMAIL) {
      return this.prisma.poneiDb.aspNetUsers.findMany({
        where: { Email: value },
        orderBy: { Id: 'desc' },
        take: 50,
      });
    }

    if (field === UserSearchField.PROFILE_ID) {
      return this.prisma.poneiDb.aspNetUsers.findMany({
        where: { ProfileId: value },
        orderBy: { Id: 'desc' },
        take: 50,
      });
    }

    const queryField = field === UserSearchField.CPF ? 'p."CpfCnpj"' : 'COALESCE(u."PhoneNumber", p."Phone")';

    return this.prisma.poneiDb.$queryRaw<
      Array<{
        Id: string;
        Email: string | null;
        PhoneNumber: string | null;
        ProfileId: string | null;
        UserAddressId: string | null;
      }>
    >(Prisma.sql`
      SELECT u."Id", u."Email", u."PhoneNumber", u."ProfileId", u."UserAddressId"
      FROM "AspNetUsers" u
      LEFT JOIN "Profiles" p ON p."Id" = u."ProfileId"
      WHERE ${Prisma.raw(queryField)} = ${value}
      ORDER BY u."Id" DESC
      LIMIT 50
    `);
  }

  async findProfileById(id: string | null) {
    if (!id) return null;
    return this.prisma.poneiDb.profiles.findUnique({ where: { Id: id } });
  }

  async findAddressById(id: string | null) {
    if (!id) return null;
    return this.prisma.poneiDb.userAddresses.findUnique({ where: { Id: id } });
  }

  async findAppUserByPoneyAccount(idPonyAccount: string) {
    // O modelo User não existe no banco ni-poneiconta
    // Precisamos buscar pelo IdPonyAccount em AspNetUsers ou usar Users do player-db
    return this.prisma.playerDb.users.findFirst({ where: { IdPonyAccount: idPonyAccount } });
  }

  async findAppUserById(id: string) {
    // O modelo User não existe no banco ni-poneiconta
    // Precisamos buscar pelo Id em AspNetUsers ou usar Users do player-db
    return this.prisma.playerDb.users.findUnique({ where: { Id: id } });
  }

  async findSubscriptionSummary(subscriptionId: string | null | undefined) {
    if (!subscriptionId) return null;

    const rows = await this.prisma.playerDb.$queryRaw<
      Array<{
        id: string;
        plan_type: number | null;
        status: number | null;
        courtesy: boolean | null;
        gateway_id: string | null;
        start_date: Date | null;
        end_date: Date | null;
        transaction_id: string | null;
        store: number | null;
        store_product_id: string | null;
      }>
    >(Prisma.sql`
      SELECT
        s."Id" AS id,
        s."PlanType" AS plan_type,
        s."Status" AS status,
        s."Courtesy" AS courtesy,
        s."GatewayId" AS gateway_id,
        sd."StartDate" AS start_date,
        sd."EndDate" AS end_date,
        sd."GatewayTransactionId" AS transaction_id,
        sd."Store" AS store,
        sd."StoreProductId" AS store_product_id
      FROM "Subscriptions" s
      LEFT JOIN "SubscriptionDetails" sd
        ON sd."SubscriptionId" = s."Id" AND sd."Excluded" = false
      WHERE s."Id" = ${subscriptionId}
      ORDER BY sd."EndDate" DESC NULLS LAST, sd."CreatedAt" DESC
      LIMIT 1
    `);

    return rows[0] ?? null;
  }

  async findSubscriptionDetails(subscriptionId: string | null | undefined) {
    if (!subscriptionId) return [];
    return this.prisma.playerDb.subscriptionDetail.findMany({
      where: { SubscriptionId: subscriptionId },
    });
  }

  async updateAuthUserEmail(userId: string, newEmail: string) {
    return this.prisma.poneiDb.aspNetUsers.update({
      where: { Id: userId },
      data: {
        UserName: newEmail,
        NormalizedUserName: newEmail.toUpperCase(),
        Email: newEmail,
        NormalizedEmail: newEmail.toUpperCase(),
      },
      select: { Id: true, Email: true },
    });
  }
}
