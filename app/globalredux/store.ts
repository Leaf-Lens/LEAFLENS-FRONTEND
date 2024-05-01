'use client';

import { configureStore } from "@reduxjs/toolkit";
import subscriptionReducer from "./features/subscription/subscriptionSlice";
import appReducer from "./features/app/appSlice"

export const store = configureStore({
    reducer: {
        app: appReducer,
        subscription: subscriptionReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch