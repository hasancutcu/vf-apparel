import fs from 'fs';
import { ICart } from '../common/cart';
import { IProduct } from '../common/product';
import { v4 as uuidv4 } from 'uuid';

const readCart = (cart_id: string): ICart => {
  try {
    const cartsBuffer: Buffer = fs.readFileSync('carts.json');
    const carts: ICart[] = JSON.parse(cartsBuffer.toString());
    const cart = carts.find((c) => c.id === cart_id);
    return cart || { id: cart_id, items: [], total_amount: 0 };
  } catch (error) {
    throw new Error('Cart cart not found');
  }
};

const addToCart = (cart_id: string, product: IProduct) => {
  let carts: ICart[] = [];

  carts = JSON.parse(fs.readFileSync('carts.json', 'utf8'));

  const cartIndex = carts.findIndex((c) => c.id === cart_id);
  //if cart is not found in the carts.json file, create new cart and add product to new cart
  if (cartIndex === -1) {
    const cart: ICart = {
      id: generateCartId(),
      items: [
        {
          product: product,
          quantity: 1,
          amount: parseFloat(product.variants[0].price),
        },
      ],
      total_amount: parseFloat(product.variants[0].price),
    };
    carts.push(cart);
  } else {
    //Cart found
    const cart = carts[cartIndex];
    const itemIndex = cart.items.findIndex((i) => i.product.id === product.id);
    //if item is found, add new increase the qty
    if (itemIndex !== -1) {
      cart.items[itemIndex].quantity++;
      cart.items[itemIndex].amount += parseFloat(product.variants[0].price);
      cart.items[itemIndex].quantity;
      cart.total_amount += parseFloat(product.variants[0].price);
    } else {
      //if item is not found, add new item to cart
      cart.items.push({
        product: product,
        quantity: 1,
        amount: parseFloat(product.variants[0].price),
      });
      cart.total_amount += parseFloat(product.variants[0].price);
    }
    carts.splice(cartIndex, 1, cart); // replace the cart with the new cart
  }
  fs.writeFileSync('carts.json', JSON.stringify(carts));
};

const removeFromCart = (cart_id: string, product: IProduct) => {
  let carts: ICart[] = [];

  carts = JSON.parse(fs.readFileSync('carts.json', 'utf8'));

  const cartIndex = carts.findIndex((c) => c.id === cart_id);
  const cart = carts[cartIndex];
  const itemIndex = cart.items.findIndex((i) => i.product.id === product.id);
  //if item is found, remove completely
  if (itemIndex > -1) {
    cart.total_amount -= cart.items[itemIndex].amount;
    cart.items.splice(itemIndex, 1);
  }
  carts.splice(cartIndex, 1, cart); // replace the cart with the new cart
  fs.writeFileSync('carts.json', JSON.stringify(carts));
};

const generateCartId = (): string => {
  return uuidv4();
};
export { readCart, addToCart, removeFromCart, generateCartId };