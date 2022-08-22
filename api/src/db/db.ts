import axios, { AxiosResponse } from 'axios';
import { IProduct } from '../common/product';

const urlJson = 'https://efuktshirts.com/products.json';

const getProducts = async (): Promise<IProduct[] | undefined> => {
  try {
    const response: AxiosResponse = await axios.get(urlJson);
    if (response.status === 200 && response.data && response.data.products) {
      return response.data.products;
    }
  } catch (error) {
    return [];
  }
};

export { getProducts };
