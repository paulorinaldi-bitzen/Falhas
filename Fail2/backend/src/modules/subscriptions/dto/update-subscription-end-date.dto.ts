import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class UpdateSubscriptionEndDateDto {
  @IsString()
  @IsNotEmpty()
  subscriptionId!: string;

  @IsDateString()
  newEndDate!: string;
}
