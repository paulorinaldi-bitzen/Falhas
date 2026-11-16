import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FirebaseAdminService } from '../auth/firebase-admin.service';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  constructor(
    private readonly firebaseAdminService: FirebaseAdminService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization as string | undefined;
    if (!authHeader?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token de autenticação não enviado.');
    }

    const token = authHeader.replace('Bearer ', '');
    const decodedToken = await this.firebaseAdminService.getAuthClient().verifyIdToken(token);
    const allowedEmails = (this.configService.get<string>('ADMIN_ALLOWED_EMAILS') ?? '')
      .split(',')
      .map((value) => value.trim().toLowerCase())
      .filter(Boolean);

    if (allowedEmails.length && !allowedEmails.includes(decodedToken.email?.toLowerCase() ?? '')) {
      throw new UnauthorizedException('Usuário não autorizado para o painel administrativo.');
    }

    request.user = decodedToken;
    return true;
  }
}
