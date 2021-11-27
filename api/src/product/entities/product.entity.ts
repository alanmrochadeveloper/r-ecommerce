import { Category } from "src/category/entities/category.entity";
import { Orderline } from "src/orderline/entities/orderline.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('products')
export class Product {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  price: number;
  
  @ManyToOne(()=> Category, category => category.products)
  category: Category;

  @Column()
  brand: string;

  @Column()
  stock : number; // this show how many are in the stock

  @OneToMany(() => Product, product => product)
  orderlines: Orderline[];


  @Column()
  description: string;
  
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

