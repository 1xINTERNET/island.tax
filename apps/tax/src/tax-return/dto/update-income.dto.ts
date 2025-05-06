import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateIncomeDto {
  @IsOptional()
  @IsNumber()
  readonly amount?: number;

  @IsOptional()
  @IsString()
  readonly description?: string;
}
