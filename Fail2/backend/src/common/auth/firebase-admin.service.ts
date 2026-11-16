import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { App, cert, getApps, initializeApp } from 'firebase-admin/app';
import { Auth, getAuth } from 'firebase-admin/auth';

@Injectable()
export class FirebaseAdminService implements OnModuleInit {
  private app!: App;
  private auth!: Auth;

  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    if (!getApps().length) {
      this.app = initializeApp({
        credential: cert({
          projectId: this.configService.get<string>('FIREBASE_PROJECT_ID'),
          clientEmail: this.configService.get<string>('FIREBASE_CLIENT_EMAIL'),
          privateKey: this.configService
            .get<string>('FIREBASE_PRIVATE_KEY', '')
            .replace(/\\n/g, '\n'),
        }),
      });
    } else {
      [this.app] = getApps();
    }

    this.auth = getAuth(this.app);
  }

  getAuthClient(): Auth {
    return this.auth;
  }
}
