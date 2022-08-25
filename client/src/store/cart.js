import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { total: 0, itemCount: 0, items: [] };
/**
 * Slice tp manage cart state
 */
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
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;