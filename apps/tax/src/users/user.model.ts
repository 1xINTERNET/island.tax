import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { TaxReturn } from '../tax-return/tax-return.model';

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING }) // hashed password if needed
  password: string;

  @HasMany(() => TaxReturn)
  taxReturns: TaxReturn[];
}
