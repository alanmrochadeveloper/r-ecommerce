export interface IProduct {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string,
}

export const products: IProduct[] = [
  {
    id: '1',
    title: 'Calça jeans',
    description: 'Excelênte para para pessoas descoladas',
    category: 'calca',
    image: 'assets/mock-product.jpeg',
  },
  {
   id: '2',
    title: 'Boné da Qix',
    description: 'Além de estiloso protoje do sol',
    category: 'bone',
    image: 'assets/mock-product.jpeg',
  },
  {
    id: '3',
    title: 'Cueca da Bad Boy',
    description: 'Conforto',
    category: 'cueca',
    image: 'assets/mock-product.jpeg',
  },
  {
    id: '4',
    title: 'Cueca da Adidas',
    description: 'Conforto esportivo',
    category: 'cueca',
    image: 'assets/mock-product.jpeg',
  },
  {
    id: '5',
    title: 'Bone da Adidas',
    description: 'Conforto e sombra para a cabeça',
    category: 'bone',
    image: 'assets/mock-product.jpeg',
  },
  {
    id: '6',
    title: 'Cueca da pardal',
    description: 'simples e objetiva',
    category: 'cueca',
    image: 'assets/mock-product.jpeg',
  },
]
