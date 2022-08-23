import fs from 'fs';
import { ICart } from '../common/cart';
import { IProduct } from '../common/product';
import { v4 as uuidv4 } from 'uuid';

const readCart = (cart_id: string): ICart => {
  const cartsBuffer: Buffer = fs.readFileSync('carts.json');
  const carts: ICart[] = JSON.parse(cartsBuffer.toString());
  const cart = carts.find((c) => c.id === cart_id);
  return cart || { id: generateCartId(), items: [], total_amount: 0 };
};

//TODO: need to implement cart id
const addToCart = (cart_id: string, product: IProduct) => {
  let carts: ICart[] = [];

  if (fs.existsSync('carts.json')) {
    carts = JSON.parse(fs.readFileSync('carts.json', 'utf8'));
  } else {
    //TODO: need to remove this when it's sure thing that the carts.json file exists
    fs.writeFileSync('carts.json', JSON.stringify(carts));
  }

  //let cart = carts.find((c) => c.id === cart_id);
  const cartIndex = carts.findIndex((c) => c.id === cart_id);
  //if cart is not found in the carts.json file, create new cart and add product to new cart
  if (cartIndex === -1) {
    const cart = {
      id: generateCartId(),
      items: [
        { product: product, quantity: 1, amount: product.variants[0].price },
      ],
      total_amount: product.variants[0].price,
    };
    carts.push(cart);
  } else {
    //Cart found
    const cart = carts[cartIndex];
    const itemIndex = cart.items.findIndex((i) => i.product.id === product.id);
    //if item is found, add new increase the qty
    if (itemIndex !== -1) {
      cart.items[itemIndex].quantity++;
      cart.items[itemIndex].amount += product.variants[0].price;
      cart.items[itemIndex].quantity;
      cart.total_amount += product.variants[0].price;
    } else {
      //if item is not found, add new item to cart
      cart.items.push({
        product: product,
        quantity: 1,
        amount: product.variants[0].price,
      });
      cart.total_amount += product.variants[0].price;
    }
    carts.splice(cartIndex, 1, cart); // replace the cart with the new cart
  }
  fs.writeFileSync('carts.json', JSON.stringify(carts));
};

//TODO: need to implement cart id and removing logic
const removeFromCart = (product: IProduct) => {};

const generateCartId = (): string => {
  return uuidv4();
};
export { readCart, addToCart, removeFromCart, generateCartId };
