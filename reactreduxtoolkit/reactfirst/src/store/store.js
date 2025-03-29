import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice.js';
import productSlice from './productSlice.js';
//configureStore from redux toolkit it creates the store
const store = configureStore({
    reducer:{
        //creating a property of cart that will store the property of cartslice
        //cartSlice reducer that handles cart - related state
        cart : cartSlice,
        //productSlice reducer that handles prodct -related state
        products : productSlice
    }
})

export default store;