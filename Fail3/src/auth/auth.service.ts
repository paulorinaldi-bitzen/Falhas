import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private allowedEmails: string[] = [];

  constructor(private jwtService: JwtService) {
    this.loadAllowedEmails();
  }

  private loadAllowedEmails() {
    const emails = process.env.FIREBASE_ALLOWED_EMAILS || '';
    this.allowedEmails = emails.split(',').map(e => e.trim()).filter(e => e);
  }

  async validateFirebaseToken(token: string): Promise<any> {
    try {
      // Em produção, validar o token com Firebase Admin SDK
      // Por enquanto, vamos fazer uma validação simplificada
      const decoded = this.jwtService.verify(token);
      
      if (!decoded.email || !this.isEmailAllowed(decoded.email)) {
        throw new UnauthorizedException('Email não autorizado');
      }

      return decoded;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }

  private isEmailAllowed(email: string): boolean {
    return this.allowedEmails.includes(email);
  }

  async login(firebaseToken: string) {
    const decoded = await this.validateFirebaseToken(firebaseToken);
    
    const payload = {
      email: decoded.email,
      sub: decoded.uid,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        email: decoded.email,
        uid: decoded.uid,
      },
    };
  }

  verifyToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
