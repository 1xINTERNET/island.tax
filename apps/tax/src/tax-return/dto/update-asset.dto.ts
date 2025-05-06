import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateAssetDto {
  @IsOptional()
  @IsNumber()
  readonly value?: number;

  @IsOptional()
  @IsString()
  readonly type?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;
}
