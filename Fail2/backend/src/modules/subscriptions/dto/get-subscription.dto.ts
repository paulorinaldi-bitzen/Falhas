import { IsNotEmpty, IsString } from 'class-validator';

export class GetSubscriptionDto {
  @IsString()
  @IsNotEmpty()
  id!: string;
}
