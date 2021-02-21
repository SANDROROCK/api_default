import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  unid: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: string;
}
