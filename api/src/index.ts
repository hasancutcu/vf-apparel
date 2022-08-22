import { app } from './app';

const start = async () => {
  console.log('starting server...');
  app.listen(4000, () => {
    console.log('server started on port 4000');
  });
};

start();
