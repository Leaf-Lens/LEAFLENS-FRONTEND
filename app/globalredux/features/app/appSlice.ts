'use client';

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
    inquiryModalIsShown: boolean,
    snackbarSuccessIsShown: boolean
}

const initialState: AppState = {
    inquiryModalIsShown: false,
    snackbarSuccessIsShown: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setInquiryModalIsShown: (state, action: PayloadAction<boolean>) => {
            state.inquiryModalIsShown = action.payload;
        },
        setSnackbarSuccessIsShown: (state, action: PayloadAction<boolean>) => {
            state.snackbarSuccessIsShown = action.payload;
        },
    }
})


export const {
    setInquiryModalIsShown,
    setSnackbarSuccessIsShown
} = appSlice.actions;

export default appSlice.reducer;
