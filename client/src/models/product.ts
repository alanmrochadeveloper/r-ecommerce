export enum InventoryType  {
  IN_STOCK = 'in stock',
  LIMITED = 'limited',
  OUT_OF_STOCK = 'out of stock',
} 

export interface IProduct {
    id: string;
    attributes?: string;
    title: string;
    description: string;
    brand: string;
    category: string;
    image?: string;
    price: string;
    createdAt: number | string;
    currency?: string;
    inventoryType?: InventoryType;
    isAvailable?: boolean;
    isShippable?: boolean;
    quantity: number;
    updatedAt: number | string;
    images: string [];
    includesTaxes: boolean;
    isTaxable: boolean;
    productCode: string;
    productSku: string;
    salePrice: string;
}
