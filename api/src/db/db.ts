import axios, { AxiosResponse } from 'axios';
import { IProduct } from '../common/product';

const urlJson = 'https://efuktshirts.com/products.json';

const getProducts = async (): Promise<IProduct[]> => {
  try {
    const response: AxiosResponse = await axios.get(urlJson);
    if (response.status === 200 && response.data && response.data.products) {
      return response.data.products;
    }
    return [];
  } catch (error) {
    return [];
  }
};

const findById = async (productId: number): Promise<IProduct | undefined> => {
  const products = await getProducts();
  const product =
    products.find((product) => product.id === productId) || undefined;
  return product;
};

export { getProducts, findById };
