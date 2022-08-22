import express from 'express';
import { getProducts } from '../db/db';

const router = express.Router();

router.get('/products', async (req, res) => {
  const products = await getProducts();
  res.send(products);
});

export { router as getProductsRouter };
