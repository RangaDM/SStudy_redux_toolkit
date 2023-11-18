import { configureStore } from "@reduxjs/toolkit";
import numberSlicereduce from "./reducers/numberSlice";
import laptopSlicereduce from "./reducers/laptopSlice";
import number2Slicereduce from "./reducers/number2Slice";

const store = configureStore({
    reducer: {
        numberSlice: numberSlicereduce,
        laptopSlice: laptopSlicereduce,
        number2Slice: number2Slicereduce
    }
})

export default store