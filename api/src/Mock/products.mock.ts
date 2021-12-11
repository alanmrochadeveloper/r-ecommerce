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
