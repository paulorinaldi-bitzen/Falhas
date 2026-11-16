import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private subscriptionsService: SubscriptionsService) {}

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.subscriptionsService.findById(id);
  }

  @Get('profile/:profileId')
  async findByProfileId(@Param('profileId') profileId: string) {
    return this.subscriptionsService.findByProfileId(profileId);
  }

  @Put(':id/end-date')
  async updateEndDate(@Param('id') id: string, @Body('endDate') endDate: string) {
    return this.subscriptionsService.updateEndDate(id, new Date(endDate));
  }

  @Put(':id/start-date')
  async updateStartDate(@Param('id') id: string, @Body('startDate') startDate: string) {
    return this.subscriptionsService.updateStartDate(id, new Date(startDate));
  }
}
