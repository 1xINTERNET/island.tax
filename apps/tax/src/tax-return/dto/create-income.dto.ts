import { IsNumber, IsString } from 'class-validator';

export class CreateIncomeDto {
  @IsNumber()
  readonly taxReturnId: number;

  @IsString()
  readonly amount: number;

  @IsString()
  readonly description?: string;
}
