import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

@Injectable()
export class FirebaseService implements OnModuleInit {
  private app: App | null = null;
  private readonly logger = new Logger(FirebaseService.name);
  private firebaseEnabled = false;

  onModuleInit() {
    try {
      const projectId = process.env.FIREBASE_PROJECT_ID;
      const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
      const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

      if (!projectId || !clientEmail || !privateKey) {
        this.logger.warn('Firebase credentials not configured. Firebase features will be disabled.');
        return;
      }

      const existingApps = getApps();
      if (existingApps.length === 0) {
        const serviceAccount = {
          projectId,
          clientEmail,
          privateKey,
        };

        this.app = initializeApp({
          credential: cert(serviceAccount),
        });
      } else {
        this.app = existingApps[0];
      }

      this.firebaseEnabled = true;
      this.logger.log('Firebase initialized successfully');
    } catch (error) {
      this.logger.error('Failed to initialize Firebase:', error);
      this.logger.warn('Firebase features will be disabled due to initialization error.');
    }
  }

  async verifyToken(token: string): Promise<any> {
    if (!this.firebaseEnabled || !this.app) {
      throw new Error('Firebase not configured');
    }
    try {
      const auth = getAuth(this.app);
      return await auth.verifyIdToken(token);
    } catch (error) {
      throw new Error('Token inválido ou expirado');
    }
  }

  getApp(): App | null {
    return this.app;
  }

  getFirestore(): any {
    if (!this.firebaseEnabled || !this.app) {
      return null;
    }
    return getFirestore(this.app);
  }

  isEnabled(): boolean {
    return this.firebaseEnabled;
  }
}
