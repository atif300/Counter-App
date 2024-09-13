import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlices"

const store = configureStore({
    reducer: {
        counterReducer,
    },
})
        
export default store