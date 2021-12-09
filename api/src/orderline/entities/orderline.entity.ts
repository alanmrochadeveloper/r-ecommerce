import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from '../../order/entities/order.entity';

@Entity('orderlines')
export class Orderline {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  productTitle: string;

  @Column()
  productPrice: string;

  @Column()
  productQuantity: string;

  @ManyToOne(() => Product, (product) => product.orderlines)
  product: Product;

  @ManyToOne(() => Order, (order) => order.orderlines)
  order: Order;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
