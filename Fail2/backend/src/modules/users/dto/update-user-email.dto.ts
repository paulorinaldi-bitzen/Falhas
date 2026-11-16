import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserEmailDto {
  @IsString()
  @IsNotEmpty()
  userId!: string;

  @IsEmail()
  newEmail!: string;
}
