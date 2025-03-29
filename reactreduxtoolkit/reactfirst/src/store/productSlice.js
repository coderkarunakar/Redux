import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import StatusCode from '../utils/statuscode';
const initialState = {
    data:[],
    status:StatusCode.IDLE

}
//syntax of slice
const productSlice = createSlice({
    //reduxslice named products
    //cart is the key name from the store.js
    name : 'products',
    initialState  ,
    //for creating a reducer
    reducers : {},
        // fetchProducts(state, action){
        //     //updating the state with the data i will get from the api i.e action.payload
        //     state.data = action.payload;
        // }

        //handles different states of getProducts(pending,fullfilled,rejected)
        extraReducers : (builder) => {
                //read the data(state update logic)
                builder
                .addCase(getProducts.pending,(state,action)=>{
                    state.state = StatusCode.LOADING;
                })
                .addCase(getProducts.fulfilled,(state, action) => {
                    state.data = action.payload;
                    state.status = StatusCode.IDLE
                })
                .addCase(getProducts.rejected,(state,action)=>{
                    state.status = StatusCode.ERROR
                })
            }
    }
);


//slice is a collection of redux reduce the logic ,actions for a single feature
//action will give yaou the functions
export const {fetchProducts} = productSlice.actions;
//here reducer will give you the state


//the reducer managing product state
export default productSlice.reducer;
//this thunk will take first arg as action type,2nd is callback function
export const  getProducts = createAsyncThunk('products/get',async () => {
        const response = await   fetch('https://fakestoreapi.com/products')
        const result = await response.json(); 
        return result;
})


// //Redux Thunk
// //here am creating one thunk to handle async operation in fetching the data
// export function getProducts(){
//     //this will have a dispatch and our state
//     return async function getProductsThunk(dispatch,getState){
//         //
//       const response = await   fetch('https://fakestoreapi.com/products')
//         const result = await response.json();
//         dispatch(fetchProducts(result));
//     }
// }