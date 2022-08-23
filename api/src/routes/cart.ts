import express from 'express';
import fs from 'fs';

const router = express.Router();

interface ICart {
  id: number;
  products: string;
}

router.get('/api/cart', async (req, res) => {
  fs.readFile('carts.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send(err);
    const carts: ICart[] = JSON.parse(data);
    res.status(200).send(carts);
  });
});

router.post('/api/cart', async (req, res) => {
  let carts: ICart[] = [];

  const cart: ICart = {
    id: Math.random(),
    products: '1,2,3',
  };

  try {
    if (fs.existsSync('carts.json')) {
      carts = JSON.parse(fs.readFileSync('carts.json', 'utf8'));
    } else {
      fs.writeFileSync('carts.json', JSON.stringify(carts));
    }
    carts.push(cart);
    fs.writeFileSync('carts.json', JSON.stringify(carts));
    res.status(200).send(carts);
  } catch (error) {
    return res.status(500).send(error);
  }
});

export { router as cartRouter };
