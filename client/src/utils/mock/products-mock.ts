export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string,
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Calça jeans',
    description: 'Excelênte para para pessoas descoladas',
    category: 'Calças',
    image: 'assets/mock-product.jpeg',
  },
  {
   id: '2',
    title: 'Boné da Qix',
    description: 'Além de estiloso protoje do sol',
    category: 'Boné',
    image: 'assets/mock-product.jpeg',
  },
  {
    id: '3',
    title: 'Cueca da Bad Boy',
    description: 'Conforto',
    category: 'Cueca',
    image: 'assets/mock-product.jpeg',
  }
]
