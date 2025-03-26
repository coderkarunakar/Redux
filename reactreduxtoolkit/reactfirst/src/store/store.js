import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice.js';
import productSlice from './productSlice.js';


const store = configureStore({
    reducer:{
        //creating a property of cart that will store the property of cartslice
        cart : cartSlice,
        products : productSlice
    }
})

export default store;