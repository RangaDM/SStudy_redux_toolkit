import { createSlice } from "@reduxjs/toolkit";

const reducerGen = (key='number' , operator='+') => {
    if (operator === '+') {
        return (state , action) => {
            state[key] += action.payload
        }
    }
    else if (operator === '-') {
        return (state , action) => {
            state[key] -= action.payload
        }
    }
    else if (operator === '*') {
        return (state , action) => {
            state[key] = state[key] * action.payload
        }
    }
    else if (operator === '/') {
        return (state , action) => {
            state[key] = state[key] / action.payload
        }
    }
    else{
        return (state , action) => {
            state[key] = state[key] + action.payload
        }
    }
}

const initialState = {
    number:0,
}

const number2Slice = createSlice({
    name: "number",
    initialState,
    reducers:{
        increment2: reducerGen('number'),
        // immer library is used to mutate the state

        decrement2: reducerGen('number' , '-'),
    }
})

export const {increment2 , decrement2} = number2Slice.actions

export default number2Slice.reducer

// reducers action name should be unique (increment2 , decrement , increment)