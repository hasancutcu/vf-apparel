import fs from 'fs';
import { ICart } from '../common/cart';
import { IProduct } from '../common/product';

//TODO: need to implement cart id
const readCart = (): ICart[] => {
  const cartsBuffer: Buffer = fs.readFileSync('carts.json');
  const carts: ICart[] = JSON.parse(cartsBuffer.toString());

  return carts;
};

//TODO: need to implement cart id
const addToCart = (cart: ICart) => {
  let carts: ICart[] = [];

  if (fs.existsSync('carts.json')) {
    carts = JSON.parse(fs.readFileSync('carts.json', 'utf8'));
  } else {
    //TODO: need to remove this when it's sure thing that the carts.json file exists
    fs.writeFileSync('carts.json', JSON.stringify(carts));
  }
  carts.push(cart);
  fs.writeFileSync('carts.json', JSON.stringify(carts));
};

//TODO: need to implement cart id and removing logic
const removeFromCart = (product: IProduct) => {};

export { readCart, addToCart, removeFromCart };
