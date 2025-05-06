import { IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly password?: string;
}
