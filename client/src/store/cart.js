import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { total: 0, itemCount: 0, items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    cartReceived(state, action) {
      state.total = action.payload.total_amount;
      state.itemCount = action.payload.items.reduce((total, item) => {
        return total + item.quantity;
      }, 0)
      state.items = action.payload.items;
    }
    // ,
    // addItemToCart(state, action) {
    //   state.total += action.payload.price;
    //   state.itemCount += 1;
    //   state.products = [...state.products, action.payload];
    // },
    // removeItemToCart(state, action) {
    //   state.total -= action.payload.price;
    //   state.itemCount -= 1;
    //   state.products = state.products.filter(p => p.id !== action.payload.id);
    // },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;