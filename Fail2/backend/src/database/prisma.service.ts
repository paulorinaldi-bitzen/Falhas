import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient as PoneiDbClient } from '@generated/ponei-db';
import { PrismaClient as PlayerDbClient } from '@generated/player-db';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  readonly poneiDb = new PoneiDbClient();
  readonly playerDb = new PlayerDbClient();

  async onModuleInit() {
    await Promise.all([this.poneiDb.$connect(), this.playerDb.$connect()]);
  }

  async onModuleDestroy() {
    await Promise.all([this.poneiDb.$disconnect(), this.playerDb.$disconnect()]);
  }
}
