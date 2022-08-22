import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import { getProducts } from './db/db';

const app = express();

app.use(json());
app.get('/products', async (req, res) => {
  const products = await getProducts();
  res.send(products);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
