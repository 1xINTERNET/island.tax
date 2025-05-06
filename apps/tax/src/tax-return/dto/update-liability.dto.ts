import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateLiabilityDto {
  @IsOptional()
  @IsNumber()
  readonly amount?: number;

  @IsOptional()
  @IsString()
  readonly type?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;
}
