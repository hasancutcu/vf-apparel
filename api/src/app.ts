import express from 'express';
import { json } from 'body-parser';
import { getProductsRouter } from './routes/get-products';

const app = express();

app.use(json());

app.use(getProductsRouter);


export { app };