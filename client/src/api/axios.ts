import axios from 'axios';

const bUrl = process.env.REACT_APP_API;

const api = axios.create({baseURL: bUrl})

export default api;

export enum EndPoints  {
  PRODUCTS = "products",
    ORDERS = "orders",
    TEST = "init-test/teste",
    TEST_DB = "init-test/database",
}

export enum UsersEndPoints{
  FIND_ALL = "users"
}


