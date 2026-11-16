import { IsString, IsIn, IsNotEmpty } from 'class-validator';

export class SearchUserDto {
  @IsString()
  @IsIn(['email', 'cpf', 'phone', 'profileId'])
  field: 'email' | 'cpf' | 'phone' | 'profileId';

  @IsString()
  @IsNotEmpty()
  value: string;
}
