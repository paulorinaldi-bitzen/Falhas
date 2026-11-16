import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { UserChangeLogsService } from './user-change-logs.service';
import { PrismaService } from '../../database/prisma/prisma.service';
import { PlayerPrismaService } from '../../database/prisma/player-prisma.service';
import { SubscriptionsModule } from '../subscriptions/subscriptions.module';

@Module({
  imports: [SubscriptionsModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    UsersRepository,
    UserChangeLogsService,
    PrismaService,
    PlayerPrismaService,
  ],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
