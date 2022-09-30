import { createSlice } from '@reduxjs/toolkit';
import fetchData from '../../utils/fetchData';
import store from '../store';
import { uiActions } from './uiSlice';

fetchData().then((resp) => {
    store.dispatch(fetchAllData(resp));
    store.dispatch(
        uiActions.dataStatus({
            success: true,
            isLoading: false,
            error: false,
        })
    );
});

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
    },
    reducers: {
        fetchAllData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { fetchAllData } = productSlice.actions;
export default productSlice;
