import express from 'express';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';
//Routes
import { getProductsRouter } from './routes/product';
import { cartRouter } from './routes/cart';

const app = express();

app.use(
  cors({
    origin: [`http://localhost:3000`, `https://localhost:3000`],
    credentials: true,
  })
);

var enviroment = process.env.NODE_ENV || 'development';
const useSecureCookies = enviroment === 'production';

app.use(json());

//cookie session implementation
app.use(
  cookieSession({
    name: 'vfapparel',
    keys: ['key1'],
    signed: false, // to not to encrypt the cookie
    secure: useSecureCookies, // to make sure the cookie is only sent over https in prod
    maxAge: 12 * 60 * 60 * 1000, // 12 hours
  })
);

//Register routes
app.use(getProductsRouter);
app.use(cartRouter);

export { app };
