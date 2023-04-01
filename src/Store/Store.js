import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './Slicer'
import ProductReducer from '../Store/ProductSlice'


const store = configureStore({
    reducer: {
        cart: CartReducer,
        product: ProductReducer
    }
})

export default store;
