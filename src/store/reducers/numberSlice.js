import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number:0,
    computers:0
}

const numberSlice = createSlice({
    name: "number",
    initialState,
    reducers:{
        increment: (state , action) => {
            state.number= state.number + action.payload
        },
        // immer library is used to mutate the state

        decrement: (state , action) => {
            state.number -= action.payload
        },

        addComputer: (state , action) => {
            state.computers += action.payload
        }
    }
})

export const {increment , decrement , addComputer} = numberSlice.actions

export default numberSlice.reducer