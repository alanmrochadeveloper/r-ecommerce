import { Orderline } from "src/orderline/entities/orderline.entity";
import { CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from '../../user/entities/user.entity';

@Entity('orders')
export class Order {

  @PrimaryGeneratedColumn()
  id: string;

  @OneToMany(() => Orderline, orderline => orderline)
  orderlines: Orderline[];

  @ManyToOne(() => User, user => user.orders)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

}
