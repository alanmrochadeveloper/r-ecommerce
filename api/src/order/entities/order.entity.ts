import { Orderline } from "src/orderline/entities/orderline.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
export class Order {

  @PrimaryGeneratedColumn()
  id: string;

  @OneToMany(()=> Orderline, orderline => orderline)
  orderlines: Orderline[];

}
