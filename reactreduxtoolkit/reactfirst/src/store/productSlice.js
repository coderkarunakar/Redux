import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    data:[],

}
//syntax of slice
const productSlice = createSlice({
    //cart is the key name from the store.js
    name : 'products',
    initialState  ,
    //for creating a reducer
    reducers : {
        fetchProducts(state, action){
            //updating the state with the data i will get from the api i.e action.payload
            state.data = action.payload;
        }
    }
});


//slice is a collection of redux reduce the logic ,actions for a single feature
//action will give yaou the functions
export const {fetchProducts} = productSlice.actions;
//here reducer will give you the state

export default productSlice.reducer;

//here am creating one thunk to handle async operation in fetching the data
export function getProducts(){
    //this will have a dispatch and our state
    return async function getProductsThunk(dispatch,getState){
        //
      const data = await   fetch('https://fakestoreapi.com/products')
        const result = data.json();
        dispatch(fetchProducts(result));
    }
}