import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number:0,
}

const number2Slice = createSlice({
    name: "number",
    initialState,
    reducers:{
        increment2: (state , action) => {
            state.number= state.number + action.payload
        },
        // immer library is used to mutate the state

        decrement: (state , action) => {
            state.number -= action.payload
        },
    }
})

export const {increment2 , decrement} = number2Slice.actions

export default number2Slice.reducer

// reducers action name should be unique (increment2 , decrement , increment)