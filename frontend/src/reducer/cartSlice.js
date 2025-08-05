import {createSlice} from "@reduxjs/toolkit";

const initialState = { 
        item: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers:{
        addToCart: (state, action)=>{
            state.item.push(action.payload)
        },

        removeFromCart: (state,action)=>{
          state.item = state.item.filter((item)=>item.id !== action.payload.id)  
        }

    }
})

export const { addToCart, removeFromCart } = cartSlice.actions 
export default cartSlice.reducer