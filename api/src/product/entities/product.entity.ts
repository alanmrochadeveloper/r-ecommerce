import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  price: number;
  
  @Column()
  brand: string;

  @Column()
  quantity: number;

  @Column()
  description: string;
}

