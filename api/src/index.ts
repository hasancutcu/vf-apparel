import { app } from './app';
import fs from 'fs';

const initJsonFile = async () => {
  if (!fs.existsSync('carts.json')) {
    fs.writeFileSync('carts.json', JSON.stringify([]));
  }
};

const start = async () => {
  try {
    await initJsonFile();
    console.log('starting server...');
    app.listen(4000, () => {
      console.log('server started on port 4000');
    });
  } catch (error) {
    console.log(error);
  }
};

start();
