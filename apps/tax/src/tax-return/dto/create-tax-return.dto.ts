import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateTaxReturnDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  year: number;

  @IsOptional()
  @IsString()
  status?: string;
}
