import {createSlice} from '@reduxjs/toolkit';
//syntax of slice
const cartSlice = createSlice({
    name : 'cart',
    initialState : []  ,
    //for creating a reducer
    reducers : {
        add(state, action){
            //what ever the data i will get i will update and push to state
            state.push(action.payload)
        }
    }
});

//slice is a collection of redux reduce the logic ,actions for a single feature
//action will give you the functions
export const {add} = cartSlice.actions;
//here reducer will give you the state
export default cartSlice.reducer;