import { configureStore } from '@reduxjs/toolkit';

import productSlice from './slicers/productSlice';
import currencySlice from './slicers/currencySlice';
import cartSlice from './slicers/cartSlice';
import UiSlice from './slicers/uiSlice';
export default configureStore({
    reducer: {
        product: productSlice.reducer,
        currency: currencySlice.reducer,
        cart: cartSlice.reducer,
        status: UiSlice.reducer,
    },
});
