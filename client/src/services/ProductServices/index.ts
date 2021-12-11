import api, { ProductEndpoints } from '../../api/axios';
import { IProduct } from '../../models/product';

export const getProductsAxios = async ()=>{
    return await api.get<IProduct[]>(ProductEndpoints.PRODUCTS);
}

export const getProductByIdAxios = async (id: string) => {
    return await api.get<IProduct>(ProductEndpoints.PRODUCTS+`/${id}`);
}
