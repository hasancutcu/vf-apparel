import express from 'express';
import { json } from 'body-parser';
import { getProductsRouter } from './routes/get-products';
import { cartRouter } from './routes/cart';
const app = express();

app.use(json());

app.use(getProductsRouter);
app.use(cartRouter);

export { app };
