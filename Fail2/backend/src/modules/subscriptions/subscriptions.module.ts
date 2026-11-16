import { Module } from '@nestjs/common';
import { FirebaseAdminService } from '../../common/auth/firebase-admin.service';
import { FirebaseAuthGuard } from '../../common/guards/firebase-auth.guard';
import { PrismaModule } from '../../database/prisma.module';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsRepository } from './subscriptions.repository';
import { SubscriptionsService } from './subscriptions.service';

@Module({
  imports: [PrismaModule],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService, SubscriptionsRepository, FirebaseAdminService, FirebaseAuthGuard],
})
export class SubscriptionsModule {}
