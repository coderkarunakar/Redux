import {createSlice} from '@reduxjs/toolkit';
//syntax of slice
const cartSlice = createSlice({

    //redux slice name as cart, the cart starts as an empty array
    //cart is the key name from the store.js
    name : 'cart',
    initialState : []  ,
    //for creating a reducer
    reducers : {
        //adds and item from action.payload to the cart
        add(state, action){
            //what ever the data i will get i will update and push to state
            state.push(action.payload)
        },
        //removes an item by filtering out the one with a matching id.
        remove(state,action){
            //filter based on id,keeps all items except that one id which mathces with the action .payload
            return state.filter(item => item.id != action.payload)
        }
    }
});

//slice is a collection of redux reduce the logic ,actions for a single feature
//action will give yaou the functions
export const {add,remove} = cartSlice.actions;
//here reducer will give you the state
export default cartSlice.reducer;