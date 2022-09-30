import { createSlice } from '@reduxjs/toolkit';
// import store from '../store';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
    },
    reducers: {
        addItemToCart(state, action) {
            state.items.push(action.payload);
            // const newItem = action.payload;
            // const existingItem = state.items.find(
            //     (item) => item.id === newItem.id
            // );
            // state.totalQuantity++;
            // if (!existingItem) {
            //     state.items.push({
            //         id: newItem.id,
            //         price: newItem.price,
            //         quantity: 1,
            //         totalPrice: newItem.price,
            //         name: newItem.name,
            //     });
            // } else {
            //     existingItem.quantity++;
            //     existingItem.totalPrice =
            //         existingItem.totalPrice + newItem.price;
            // }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const exisitngItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            if (exisitngItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                exisitngItem.quantity--;
                exisitngItem.totalPrice =
                    exisitngItem.totalPrice - exisitngItem.price;
            }
        },
    },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice;
//, changeQuantity, clearError
