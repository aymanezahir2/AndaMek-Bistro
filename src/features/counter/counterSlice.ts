import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
}

export const conterSlice = createSlice(
    {
        name: 'counter',
        initialState,
        reducers: {
            increment: (state)=>{
                state.count+=1
            },
            deincrement: (state)=>{
                state.count-=1
            },
        }
    }
)

export const {increment, deincrement} = conterSlice.actions;

export default conterSlice.reducer;