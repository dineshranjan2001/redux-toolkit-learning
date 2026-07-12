import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products", async () => {
  const data = await (await fetch("https://dummyjson.com/products")).json();
  return data.products;
});

const initialState = {
  items: [],
  status: null,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      ((state.status = "succeeded"), (state.items = action.payload));
    });
  },
});

export default productSlice.reducer;
