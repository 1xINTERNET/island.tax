import { Table, Column, Model, ForeignKey, DataType, BelongsTo, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { TaxReturn } from './tax-return.model';

@Table
export class Income extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @ForeignKey(() => TaxReturn)
  @Column(DataType.INTEGER)
  taxReturnId: number;

  @Column(DataType.FLOAT)
  amount: number;

  @Column(DataType.STRING)
  description: string;

  @BelongsTo(() => TaxReturn)
  taxReturn: TaxReturn;
}