import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/player';

@Injectable()
export class PlayerPrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
    console.log('✅ Conectado ao banco PostgreSQL (player-db)');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
