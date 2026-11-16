import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body('firebaseToken') firebaseToken: string) {
    return this.authService.login(firebaseToken);
  }

  @Get('verify')
  async verify(@Request() req) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    return this.authService.verifyToken(token);
  }
}
