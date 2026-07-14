import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    orderItems: [],
    orderSummeries: []
}

const orders = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        orderPlace: (state, action) => {
            const { products, summary } = action.payload;

            products.forEach((product) => {
                state?.orderItems.push(product)
            })

            state?.orderSummeries.push(summary);
        },
        removeAllOrders: (state, action) => {
            state.orderItems = [];
            state.orderSummeries = [];
        }
    }
});

export const { orderPlace,removeAllOrders } = orders.actions;
export default orders.reducer;