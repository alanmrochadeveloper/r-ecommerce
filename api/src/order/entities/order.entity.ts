import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
export class Order {

  @PrimaryGeneratedColumn()
  id: string;

}
