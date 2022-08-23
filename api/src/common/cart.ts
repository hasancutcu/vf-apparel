import { IProduct } from './product';

interface IItem {
  product: IProduct;
  quantity: number;
  amount: number;
}

interface ICart {
  id: string;
  items: IItem[];
  total_amount: number;
}

export { ICart };
