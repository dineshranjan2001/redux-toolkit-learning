import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[],
  itemCount: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state,action) => {
      state.items.push(action.payload);
      localStorage.setItem('cart',JSON.stringify(state.items));
      state.itemCount=state.items.length
    },
    removeItem: (state,action) => {  
      state.items = state.items.filter((product) => product?.id !== action.payload?.id);
      state.itemCount=state.items.length;
      localStorage.setItem('cart',JSON.stringify(state.items));
    },
  },
});
export const { addItem, removeItem } = addToCart.actions;
export default addToCart.reducer;
