import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';
import { FirebaseAdminService } from './common/auth/firebase-admin.service';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UsersModule,
    SubscriptionsModule,
  ],
  providers: [FirebaseAdminService],
  exports: [FirebaseAdminService],
})
export class AppModule {}
