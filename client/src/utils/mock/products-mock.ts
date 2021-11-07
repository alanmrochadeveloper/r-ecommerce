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
    image: 'url/path.png',
  },
  {
   id: '2',
    title: 'Boné da Qix',
    description: 'Além de estiloso protoje do sol',
    category: 'Boné',
    image: 'url/path.png',
  },
  {
    id: '3',
    title: 'Cueca da Bad Boy',
    description: 'Conforto',
    category: 'Cueca',
    image: 'url/path.png',
  }
]
