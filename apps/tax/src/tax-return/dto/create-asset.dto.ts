import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateAssetDto {
  @IsNumber()
  readonly taxReturnId: number;

  @IsNumber()
  readonly value: number;

  @IsString()
  readonly type: string;

  @IsOptional()
  @IsString()
  readonly description?: string;
}
