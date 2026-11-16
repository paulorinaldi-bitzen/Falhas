import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from '../../common/guards/firebase-auth.guard';
import { UpdateSubscriptionEndDateDto } from './dto/update-subscription-end-date.dto';
import { SubscriptionsService } from './subscriptions.service';

@UseGuards(FirebaseAuthGuard)
@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get(':id')
  getSubscriptionById(@Param('id') id: string) {
    return this.subscriptionsService.getById(id);
  }

  @Put('end-date')
  updateEndDate(@Body() payload: UpdateSubscriptionEndDateDto) {
    return this.subscriptionsService.updateEndDate(payload);
  }

  @Put('start-date')
  updateStartDate(@Body() payload: { subscriptionId: string; newStartDate: string }) {
    return this.subscriptionsService.updateStartDate(payload.subscriptionId, payload.newStartDate);
  }
}
