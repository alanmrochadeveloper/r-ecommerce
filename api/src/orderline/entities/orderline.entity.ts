import { Product } from "src/product/entities/product.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

