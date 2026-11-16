import { Controller, Get, Put, Param, Body, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('search')
  async searchUser(@Query('email') email?: string, @Query('cpf') cpf?: string, @Query('telefone') telefone?: string, @Query('profileId') profileId?: string) {
    if (email) return this.usersService.findByEmail(email);
    if (cpf) return this.usersService.findByCpf(cpf);
    if (telefone) return this.usersService.findByTelefone(telefone);
    if (profileId) return this.usersService.findByProfileId(profileId);
    return null;
  }

  @Get(':id/subscription')
  async getSubscription(@Param('id') id: string) {
    return this.usersService.findSubscriptionByPoneiAccount(id);
  }

  @Put(':id/email')
  async updateEmail(@Param('id') id: string, @Body('email') email: string) {
    return this.usersService.updateEmail(id, email);
  }
}
