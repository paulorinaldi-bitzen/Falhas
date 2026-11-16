import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { FirebaseAdminService } from '../../common/auth/firebase-admin.service';
import { FirebaseAuthGuard } from '../../common/guards/firebase-auth.guard';
import { PrismaModule } from '../../database/prisma.module';
import { UsersRepository } from './users.repository';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, FirebaseAdminService, FirebaseAuthGuard],
})
export class UsersModule {}
