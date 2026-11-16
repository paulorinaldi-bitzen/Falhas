import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { PoneimoedasModule } from './poneimoedas/poneimoedas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    SubscriptionsModule,
    PoneimoedasModule,
    AuthModule,
  ],
})
export class AppModule {}
