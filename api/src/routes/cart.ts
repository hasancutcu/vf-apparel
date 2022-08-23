import express from 'express';
import { readCart } from '../services/cart';
import { ICart } from '../common/cart';

const router = express.Router();

router.get('/api/cart', async (req, res) => {
  try {
    const carts: ICart[] = readCart();
    res.status(200).send(carts);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/api/cart', async (req, res) => {
  let carts: ICart[] = [];
  //carts = readCart();

  // try {
  //   if (fs.existsSync('carts.json')) {
  //     carts = JSON.parse(fs.readFileSync('carts.json', 'utf8'));
  //   } else {
  //     fs.writeFileSync('carts.json', JSON.stringify(carts));
  //   }
  //   carts.push(cart);
  //   fs.writeFileSync('carts.json', JSON.stringify(carts));
  //   res.status(200).send(carts);
  // } catch (error) {
  //   return res.status(500).send(error);
  // }

  return res.status(200).send('OK');
});

export { router as cartRouter };
