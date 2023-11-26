import { configureStore } from "@reduxjs/toolkit";
import { habitReducer } from "../reducer/habitReducer";


export const store = configureStore({
    reducer:{
        habitReducer,
    }
})