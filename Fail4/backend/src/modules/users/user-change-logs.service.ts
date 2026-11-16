import { Injectable, Logger } from '@nestjs/common';
import { FirebaseService } from '../../firebase/firebase.service';

export interface UserChangeLog {
  id?: string;
  adminId: string;
  adminEmail: string;
  userId: string;
  userName: string;
  userEmail: string;
  changedAt: Date;
  changes: Array<{
    field: string;
    before: string;
    after: string;
  }>;
}

@Injectable()
export class UserChangeLogsService {
  private readonly logger = new Logger(UserChangeLogsService.name);
  private readonly collectionName = 'userChangeLogs';

  constructor(private readonly firebaseService: FirebaseService) {}

  async logUserChange(logData: UserChangeLog): Promise<void> {
    if (!this.firebaseService.isEnabled()) {
      this.logger.warn('Firebase not enabled, skipping change log');
      return;
    }

    try {
      const firestore: any = this.firebaseService.getFirestore();
      if (!firestore) {
        this.logger.warn('Firestore not available, skipping change log');
        return;
      }

      const docRef = await firestore.collection(this.collectionName).add({
        ...logData,
        changedAt: new Date(),
      });
      this.logger.log(`User change logged with ID: ${docRef.id}`);
    } catch (error) {
      this.logger.error('Error logging user change:', error);
      // Don't throw error to avoid breaking the main operation
    }
  }

  async getChangeLogsByPeriod(period: string): Promise<UserChangeLog[]> {
    if (!this.firebaseService.isEnabled()) {
      this.logger.warn('Firebase not enabled, returning empty change logs');
      return [];
    }

    try {
      const firestore: any = this.firebaseService.getFirestore();
      if (!firestore) {
        this.logger.warn('Firestore not available, returning empty change logs');
        return [];
      }

      const now = new Date();
      let startDate: Date;

      switch (period) {
        case '7d':
          startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          break;
        case '30d':
          startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          break;
        case '90d':
          startDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
          break;
        default:
          startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      }

      const snapshot = await firestore
        .collection(this.collectionName)
        .where('changedAt', '>=', startDate)
        .orderBy('changedAt', 'desc')
        .get();

      const logs: UserChangeLog[] = [];
      snapshot.forEach((doc: any) => {
        const data = doc.data();
        logs.push({
          id: doc.id,
          adminId: data.adminId,
          adminEmail: data.adminEmail,
          userId: data.userId,
          userName: data.userName,
          userEmail: data.userEmail,
          changedAt: data.changedAt?.toDate ? data.changedAt.toDate() : new Date(data.changedAt),
          changes: data.changes || [],
        });
      });

      return logs;
    } catch (error) {
      this.logger.error('Error fetching change logs:', error);
      return [];
    }
  }
}
