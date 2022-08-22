import express from 'express';
import { IProduct } from '../common/product';
import { getProducts } from '../db/db';
import { sortbyPrice, sortbyTitle } from '../services/product-sort';

const router = express.Router();

router.get('/api/products', async (req, res) => {
  try {
    const products: IProduct[] = await getProducts();
    if (products.length === 0) throw new Error('No products found');

    if (!req.query.sort) return res.status(200).send(products);

    const sort = req.query.sort;
    if (sort === 'low_price') {
      const sortedProducts = sortbyPrice(products);
      return res.status(200).send(sortedProducts);
    }
    if (sort === 'high_price') {
      const sortedProducts = sortbyPrice(products, true);
      return res.status(200).send(sortedProducts);
    }
    if (sort === 'title_az') {
      const sortedProducts = sortbyTitle(products);
      return res.status(200).send(sortedProducts);
    }
    if (sort === 'title_za') {
      const sortedProducts = sortbyTitle(products, true);
      return res.status(200).send(sortedProducts);
    }
    throw new Error('Invalid sort parameter');
  } catch (error) {
    res.status(500).send(error);
  }
});

export { router as getProductsRouter };
