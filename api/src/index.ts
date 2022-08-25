import { app } from './app';
import fs from 'fs';
import { createProducts } from './db/db';

/**
 * Initial creation of products.json and carts.json files
 */
const initJsonFiles = async () => {
  //carts.json
  if (!fs.existsSync('carts.json')) {
    fs.writeFileSync('carts.json', JSON.stringify([]));
  }

  //products.json
  if (!fs.existsSync('products.json')) {
    fs.writeFileSync('products.json', JSON.stringify([]));
  }

  //fill products.json with products from efuktshirts.com
  await createProducts();
};

/**
 * Start the server
 */
const start = async () => {
  try {
    await initJsonFiles();
    console.log('starting server...');
    app.listen(4000, () => {
      console.log('server started on port 4000');
    });
  } catch (error) {
    console.log(error);
  }
};

start();
