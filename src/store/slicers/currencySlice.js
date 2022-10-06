import { createSlice } from '@reduxjs/toolkit';

export const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        selectedSymbol: '$',
    },
    reducers: {
        addCurrentSymbol: (state, action) => {
            state.selectedSymbol = action.payload;
        },
    },
});

export const { addCurrentSymbol } = currencySlice.actions;

export default currencySlice;
