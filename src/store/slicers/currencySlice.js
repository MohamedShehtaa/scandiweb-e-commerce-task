import { createSlice } from '@reduxjs/toolkit';

export const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        selectedSymbol: '$',
        amount: 0,
        prices: [],
    },
    reducers: {
        addCurrentAmount: (state, action) => {
            state.amount = action.payload;
        },
        addCurrentSymbol: (state, action) => {
            state.selectedSymbol = action.payload;
        },
        addprices: (state, action) => {
            state.prices = action.payload;
        },
    },
});

export const { addCurrentAmount, addprices, addCurrentSymbol } =
    currencySlice.actions;

export default currencySlice;
