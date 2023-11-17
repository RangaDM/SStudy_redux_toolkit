import { configureStore } from "@reduxjs/toolkit";
import numberSlicereduce from "./reducers/numberSlice";
import laptopSlicereduce from "./reducers/laptopSlice";

const store = configureStore({
    reducer: {
        numberSlice: numberSlicereduce,
        laptopSlice: laptopSlicereduce
    }
})

export default store