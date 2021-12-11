import { ProductsResponseDto } from "src/product/dto/response-product.dto";

export const mockProducts: ProductsResponseDto[] = [

  {
    id: '1',
    title: 'Cueca API da Bad Boy',
    price: 10,
    stock: 3,
    description: 'description teste',
    category: 'Cueca',
    brand: 'BAD BOY',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  },

]

export const mockProduct: ProductsResponseDto = {
  id: '1',
  title: 'Calça API',
  price: 25,
  stock: 1,
  description: 'description from this pant',
  category: 'Calça',
  brand: 'Cocci',
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date(),
}
