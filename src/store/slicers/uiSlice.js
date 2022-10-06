import { createSlice } from '@reduxjs/toolkit';

const UiSlice = createSlice({
    name: 'ui',
    initialState: {
        status: {
            success: false,
            isLoading: false,
            error: false,
        },
        overlayShowen: false,
    },
    reducers: {
        dataStatus(state, action) {
            state.status = {
                success: action.payload.success,
                isLoading: action.payload.isLoading,
                error: action.payload.error,
            };
        },
        showOverlay(state, action) {
            state.overlayShowen = action.payload;
        },
    },
});
export const uiActions = UiSlice.actions;
export default UiSlice;
