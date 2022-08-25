import { createSlice } from '@reduxjs/toolkit';

const initialProductState = { products: [], sort: 'high_price' };
/**
 * Slice tp manage product state
 */
const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {
    productsReceived(state, action) {
      state.products = action.payload;
    },
    sortChanged(state, action) {
      state.sort = action.payload;
    }
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;