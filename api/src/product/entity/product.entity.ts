import { Brand } from "src/brand/entity/brand.entity";
import { Category } from "src/category/entity/category.entity";
import { Orderline } from "src/orderline/entity/orderline.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('products')
export class Product {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  price: number;
  
  @Column()
  stock : number; // this show how many are in the stock

  @Column()
  description: string;
  
  @ManyToOne(()=> Category, category => category.products)
  category: Category;

  @ManyToOne(() => Brand, brand => brand.products)
  brand: Brand;

  @OneToMany(() => Product, product => product.orderlines)
  orderlines: Orderline[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

