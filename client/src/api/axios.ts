import axios from "axios";

const bUrl = process.env.REACT_APP_API;

const api = axios.create({ baseURL: bUrl });

export default api;

export enum EndPoints {
  PRODUCTS = "products",
  ORDERS = "orders",
  TEST = "init-test/teste",
  TEST_DB = "init-test/database",
}

export enum UsersEndPoints {
  USERS = "users",
}


export enum CategoryEndpoints {
  CATEGORIES = "categories",
  CATEGORIES_PRODUCTS = "categories/products",
  CATEGORIES_CHECK_STATUS = "categories/check/status",
}
export enum ProductEndpoints {
  PRODUCTS = "products",
  PRODUCTS_ORDERS = "products/orders",
  PRODUCTS_CHECK_STATUS = "products/check/status",
}
