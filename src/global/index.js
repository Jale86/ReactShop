import {configureStore} from "@reduxjs/toolkit";
import {reducer as productReducer}  from "./slices/productSlice";
import  {reducer as cartReducer} from "./slices/cartSlice";

export default configureStore({
    reducer : {
        products : productReducer,
        cart: cartReducer
    }
})

// dva steta za sve proizvode i Single, drugi za proizvode u korpi

