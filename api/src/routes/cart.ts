import express from 'express';
import { readCart, addToCart } from '../services/cart';
import { ICart } from '../common/cart';
import { requireCart } from '../middlewares/cart-required';
import { findById } from '../db/db';

const router = express.Router();

//get cart
router.get('/api/cart', requireCart, async (req, res) => {
  try {
    const cart = readCart(req.session?.cart_id);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send(error);
  }
});

//add item to cart
router.post('/api/cart/add/:id', requireCart, async (req, res) => {
  try {
    //check product id
    if (!req.params.id) {
      return res.status(400).send('Product id is required');
    }

    const cart_id = req.session?.cart_id;

    //find product by id
    const productId = parseInt(req.params.id);
    const product = await findById(productId);

    //add product to cart
    if (!product) {
      return res.status(400).send('Product not found');
    }
    addToCart(cart_id, product!);

    return res.status(200).send(cart_id);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { router as cartRouter };
