import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @OneToMany(()=> Product, product => product.orderlines) 
  product: Product;

}

