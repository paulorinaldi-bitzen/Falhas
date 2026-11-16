import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class SubscriptionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findSubscriptionById(id: string) {
    return this.prisma.playerDb.subscription.findUnique({ where: { Id: id } });
  }

  async findActiveDetailsBySubscriptionId(subscriptionId: string) {
    return this.prisma.playerDb.subscriptionDetail.findMany({
      where: {
        SubscriptionId: subscriptionId,
        Excluded: false,
      },
    });
  }

  async updateEndDate(subscriptionId: string, endDate: Date) {
    return this.prisma.playerDb.subscriptionDetail.updateMany({
      where: {
        SubscriptionId: subscriptionId,
        Excluded: false,
      },
      data: { EndDate: endDate },
    });
  }

  async findDetailsAfterEndDateUpdate(subscriptionId: string) {
    return this.prisma.playerDb.subscriptionDetail.findMany({
      where: {
        SubscriptionId: subscriptionId,
        Excluded: false,
      },
      select: {
        Id: true,
        EndDate: true,
      },
    });
  }

  async updateStartDate(subscriptionId: string, startDate: Date) {
    // O modelo Subscription não tem o campo StartDate
    // StartDate está em SubscriptionDetail
    await this.prisma.playerDb.subscriptionDetail.updateMany({
      where: {
        SubscriptionId: subscriptionId,
        Excluded: false,
      },
      data: { StartDate: startDate },
    });

    const details = await this.prisma.playerDb.subscriptionDetail.findMany({
      where: {
        SubscriptionId: subscriptionId,
        Excluded: false,
      },
      select: {
        Id: true,
        StartDate: true,
      },
    });

    return details;
  }
}
