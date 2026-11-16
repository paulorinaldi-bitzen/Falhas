import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from '../../common/guards/firebase-auth.guard';
import { SearchUsersDto } from './dto/search-users.dto';
import { UpdateUserEmailDto } from './dto/update-user-email.dto';
import { UsersService } from './users.service';

@UseGuards(FirebaseAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('search')
  searchUsers(@Body() payload: SearchUsersDto) {
    return this.usersService.searchUsers(payload);
  }

  @Get('poney-subscription/:poneyAccountId')
  async getSubscriptionByPoneyAccountId(@Param('poneyAccountId') poneyAccountId: string) {
    return this.usersService.getSubscriptionByPoneyAccountId(poneyAccountId);
  }

  @Put('email')
  updateUserEmail(@Body() payload: UpdateUserEmailDto) {
    console.log('Controller updateUserEmail payload:', payload);
    return this.usersService.updateUserEmail(payload);
  }
}
