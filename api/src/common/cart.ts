import { IProduct } from './product';

/**
 * Car item interface
 */
interface IItem {
  product: IProduct;
  quantity: number;
  amount: number;
}

/**
 * Cart Interface
 */
interface ICart {
  id: string;
  items: IItem[];
  total_amount: number;
}

export { ICart };
