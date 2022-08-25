import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart';
import productReducer from './product';

/**
 * redux store configuration
 */
const store = configureStore({
  reducer: { cart: cartReducer, product: productReducer },
});

export default store;
