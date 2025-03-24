import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice.js';
const store = configureStore({
    reducer:{
        //creating a property of cart that will store the property of cartslice
        cart : cartSlice,
    }
})

export default store;