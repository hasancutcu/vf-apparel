import { createSlice } from '@reduxjs/toolkit';

const initialProductState = { products: [] };

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {
    productsReceived(state, action) {
      state.products = action.payload;
    }
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;