import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice';
import productReducer from './productSlice';
import orderReducer from './orderSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
        orders: orderReducer
    }
});