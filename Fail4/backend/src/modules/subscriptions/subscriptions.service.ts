import { Injectable, Logger } from '@nestjs/common';
import { PlayerPrismaService } from '../../database/prisma/player-prisma.service';
import { normalizeUuid } from '../users/utils/player-user-link.util';

export interface SubscriptionResponse {
  subscriptionId: string | null;
  plan: string;
  status: string;
  startDate: string | null;
  renewDate: string | null;
}

const PLAN_NAMES: Record<number, string> = {
  1: 'free',
  2: 'premium',
  3: 'pro',
};

const STATUS_NAMES: Record<number, string> = {
  0: 'inactive',
  1: 'active',
  2: 'cancelled',
  3: 'expired',
};

@Injectable()
export class SubscriptionsService {
  private readonly logger = new Logger(SubscriptionsService.name);

  constructor(private readonly playerPrisma: PlayerPrismaService) {}

  /** @deprecated Use getSubscriptionByLookupIds */
  async getSubscriptionByUserId(userId: string): Promise<SubscriptionResponse | null> {
    return this.getSubscriptionByLookupIds([userId]);
  }

  async getSubscriptionByLookupIds(
    lookupIds: string[],
  ): Promise<SubscriptionResponse | null> {
    const ids = [...new Set(lookupIds.map(normalizeUuid).filter(Boolean))];
    if (ids.length === 0) {
      return null;
    }

    try {
      const user = await this.playerPrisma.users.findFirst({
        where: {
          Excluded: false,
          OR: ids.flatMap((id) => [
            { IdPonyAccount: id },
            { Id: id },
          ]),
        },
      });

      if (!user) {
        this.logger.warn(
          `User not found in ni-player-api for lookup ids: ${ids.join(', ')}`,
        );
        return null;
      }

      if (!user.SubscriptionId) {
        this.logger.warn(
          `Player user ${user.Id} found but has no SubscriptionId`,
        );
        return null;
      }

      const subscription = await this.playerPrisma.subscriptions.findFirst({
        where: {
          Id: user.SubscriptionId,
          Excluded: false,
        },
      });

      if (!subscription) {
        this.logger.warn(
          `No Subscription found with Id: ${user.SubscriptionId}`,
        );
        return null;
      }

      const subscriptionDetails =
        await this.playerPrisma.subscriptionDetails.findFirst({
          where: {
            SubscriptionId: user.SubscriptionId,
            Excluded: false,
          },
          orderBy: {
            StartDate: 'desc',
          },
        });

      return {
        subscriptionId: user.SubscriptionId,
        plan: PLAN_NAMES[subscription.PlanType] ?? 'unknown',
        status: STATUS_NAMES[subscription.Status] ?? 'unknown',
        startDate: subscriptionDetails?.StartDate
          ? subscriptionDetails.StartDate.toISOString()
          : null,
        renewDate: subscriptionDetails?.EndDate
          ? subscriptionDetails.EndDate.toISOString()
          : null,
      };
    } catch (error) {
      this.logger.error(
        `Error fetching subscription for lookup ids ${ids.join(', ')}:`,
        error instanceof Error ? error.stack : error,
      );
      return null;
    }
  }
}
