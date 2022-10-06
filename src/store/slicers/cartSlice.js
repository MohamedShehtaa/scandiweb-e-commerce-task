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
            const newItem = action.payload;
            //check if this product is exit end items or not
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );

            state.totalQuantity++;
            state.totalAmount =
                state.totalAmount + newItem.currentPrice.totalAmount;
            //if not add new one
            if (!existingItem) {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                });
            } else {
                //if exist and with different attribute
                const existingItemWithNewAttribute = state.items.find(
                    (item) =>
                        JSON.stringify(item.choosenAttributes) ===
                        JSON.stringify(newItem.choosenAttributes)
                );

                if (!existingItemWithNewAttribute) {
                    state.items.push({
                        ...newItem,
                        quantity: 1,
                    });
                } else {
                    //if exist with same attribute increase quantity
                    existingItemWithNewAttribute.quantity++;
                }
            }
        },
        removeItemFromCart(state, action) {
            const newItem = action.payload;
            //search with attributes of the product
            const existingItemWithNewAttribute = state.items.find(
                (item) =>
                    JSON.stringify(item.choosenAttributes) ===
                    JSON.stringify(newItem.choosenAttributes)
            );
            state.totalQuantity--;
            state.totalAmount =
                state.totalAmount -
                existingItemWithNewAttribute.currentPrice.totalAmount;

            if (existingItemWithNewAttribute.quantity === 1) {
                state.items = state.items.filter(
                    (item) =>
                        JSON.stringify(item.choosenAttributes) !==
                        JSON.stringify(
                            existingItemWithNewAttribute.choosenAttributes
                        )
                );
            } else {
                existingItemWithNewAttribute.quantity--;
            }
        },
        //increse target product
        increaseQuantity(state, action) {
            const newItem = action.payload;
            const existingItemWithNewAttribute = state.items.find(
                (item) =>
                    JSON.stringify(item.choosenAttributes) ===
                    JSON.stringify(newItem.choosenAttributes)
            );
            if (existingItemWithNewAttribute) {
                existingItemWithNewAttribute.quantity++;
                state.totalQuantity++;
                state.totalAmount =
                    state.totalAmount +
                    existingItemWithNewAttribute.currentPrice.totalAmount;
            }
        },
    },
});

export const { addItemToCart, removeItemFromCart, increaseQuantity } =
    cartSlice.actions;

export default cartSlice;
