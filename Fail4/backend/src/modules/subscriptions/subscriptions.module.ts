import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { PlayerPrismaService } from '../../database/prisma/player-prisma.service';

@Module({
  providers: [SubscriptionsService, PlayerPrismaService],
  exports: [SubscriptionsService],
})
export class SubscriptionsModule {}
