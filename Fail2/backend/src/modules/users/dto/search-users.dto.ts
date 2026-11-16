import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum UserSearchField {
  EMAIL = 'email',
  CPF = 'cpf',
  PHONE = 'phone',
  PROFILE_ID = 'profileId',
}

export class SearchUsersDto {
  @IsEnum(UserSearchField)
  field!: UserSearchField;

  @IsString()
  @IsNotEmpty()
  value!: string;
}
