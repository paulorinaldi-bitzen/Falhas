import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateSubscriptionEndDateDto } from './dto/update-subscription-end-date.dto';
import { SubscriptionsRepository } from './subscriptions.repository';

@Injectable()
export class SubscriptionsService {
  constructor(private readonly subscriptionsRepository: SubscriptionsRepository) {}

  async getById(id: string) {
    const trimmedId = id.trim();
    const base = await this.subscriptionsRepository.findSubscriptionById(trimmedId);

    if (!base) {
      throw new NotFoundException('Assinatura não encontrada para o ID informado.');
    }

    const details = await this.subscriptionsRepository.findActiveDetailsBySubscriptionId(trimmedId);

    return {
      base,
      detailsBySubscriptionId: details,
    };
  }

  async updateEndDate(payload: UpdateSubscriptionEndDateDto) {
    const dateWithTime = `${payload.newEndDate}T23:59:59`;
    const trimmedSubscriptionId = payload.subscriptionId.trim();
    const result = await this.subscriptionsRepository.updateEndDate(
      trimmedSubscriptionId,
      new Date(dateWithTime),
    );

    if (!result.count) {
      throw new NotFoundException('Subscription ID não encontrado.');
    }

    const updated = await this.subscriptionsRepository.findDetailsAfterEndDateUpdate(trimmedSubscriptionId);

    return {
      success: true,
      updated,
    };
  }

  async updateStartDate(subscriptionId: string, newStartDate: string) {
    const trimmedSubscriptionId = subscriptionId.trim();
    const result = await this.subscriptionsRepository.updateStartDate(
      trimmedSubscriptionId,
      new Date(newStartDate),
    );

    if (!result.length) {
      throw new NotFoundException('Subscription ID não encontrado.');
    }

    return {
      success: true,
      updated: result,
    };
  }
}
