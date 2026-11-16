import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SubscriptionsService {
  constructor(private prisma: PrismaService) {}

  async findById(id: string) {
    return this.prisma.player.subscription.findUnique({
      where: { id },
      include: { profile: true },
    });
  }

  async updateEndDate(id: string, endDate: Date) {
    return this.prisma.player.subscription.update({
      where: { id },
      data: { endDate },
      include: { profile: true },
    });
  }

  async updateStartDate(id: string, startDate: Date) {
    return this.prisma.player.subscription.update({
      where: { id },
      data: { startDate },
      include: { profile: true },
    });
  }

  async findByProfileId(profileId: string) {
    return this.prisma.player.subscription.findMany({
      where: { profileId },
      include: { profile: true },
      orderBy: { createdAt: 'desc' },
    });
  }
}
