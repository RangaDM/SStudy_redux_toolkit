import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id:1,
        price:25000,
        brand:"hp",
        spec:{
            ram:4,
            storage:256,
            processor:"i3"
        }
    }
]

const laptopSlice = createSlice({
    name: "laptop",
    initialState,
    reducers:{
        addLaptop: {
            reducer : (state , action) => {
                state.push(action.payload)
            },
            prepare: (brand , price , ram , storage , processor) => {
                return {
                    payload:{
                        id:nanoid(),
                        brand:brand,
                        price:price,
                        spec:{
                            ram:ram,
                            storage:storage,
                            processor:processor,
                        }
                    }
                }
            }
        },
    }
})

export const laptopSliceSelector = (store) => store.laptopSlice;

export const {addLaptop} = laptopSlice.actions

export default laptopSlice.reducer