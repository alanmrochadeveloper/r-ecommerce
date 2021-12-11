export class ProductsResponseDto {
  id: string;
  title: string;
  price: number;
  stock: number;
  description: string;
  category: string;
  brand: string;
  createdAt? : Date;
  updatedAt? : Date;
  deletedAt? : Date;
}
