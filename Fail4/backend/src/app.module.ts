import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [UsersModule, FirebaseModule],
})
export class AppModule {}
