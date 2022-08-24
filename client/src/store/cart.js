import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { total: 0, itemCount: 0, products: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      state.total += action.payload.price;
      state.itemCount += 1;
      state.products = [...state.products, action.payload];
    },
    removeItemToCart(state, action) {
      state.total -= action.payload.price;
      state.itemCount -= 1;
      state.products = state.products.filter(p => p.id !== action.payload.id);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;