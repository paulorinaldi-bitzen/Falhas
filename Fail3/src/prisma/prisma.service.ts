import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient as PoneiPrismaClient } from '../../prisma/generated/ponei-client';
import { PrismaClient as PlayerPrismaClient } from '../../prisma/generated/player-client';

@Injectable()
export class PrismaService extends PoneiPrismaClient implements OnModuleInit, OnModuleDestroy {
  private playerPrisma: PlayerPrismaClient;

  constructor() {
    super();
    this.playerPrisma = new PlayerPrismaClient();
  }

  async onModuleInit() {
    await this.$connect();
    await this.playerPrisma.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
    await this.playerPrisma.$disconnect();
  }

  get player() {
    return this.playerPrisma;
  }
}
