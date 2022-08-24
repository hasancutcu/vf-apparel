import axios, { AxiosResponse } from 'axios';
import { IProduct } from '../common/product';
import fs from 'fs';

const urlJson = 'https://efuktshirts.com/products.json';

//create a json file so we can read the products from it
const createProducts = async () => {
  try {
    const response: AxiosResponse = await axios.get(urlJson);
    if (response.status === 200 && response.data && response.data.products) {
      const products: IProduct[] = response.data.products.map(
        (product: any) => {
          return {
            id: product.id,
            title: product.title,
            variant_title: product.variants[0].title,
            price: parseFloat(product.variants[0].price),
            image: product.images[0].src,
          };
        }
      );
      fs.writeFileSync('products.json', JSON.stringify(products));
    }
  } catch (error) {
    fs.writeFileSync('products.json', JSON.stringify([]));
  }
};

const getProducts = async (): Promise<IProduct[]> => {
  try {
    const productsBuffer: Buffer = fs.readFileSync('products.json');
    const products: IProduct[] = JSON.parse(productsBuffer.toString());
    return products;
  } catch (error) {
    throw new Error('could not get products');
  }
};

const findById = async (productId: number): Promise<IProduct | undefined> => {
  const products = await getProducts();
  const product =
    products.find((product) => product.id === productId) || undefined;
  return product;
};

export { getProducts, findById, createProducts };
