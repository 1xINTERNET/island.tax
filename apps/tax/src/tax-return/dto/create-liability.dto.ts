import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateLiabilityDto {
  @IsNumber()
  readonly taxReturnId: number;

  @IsNumber()
  readonly amount: number;

  @IsString()
  readonly type: string;

  @IsString()
  readonly description?: string;
}
