import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import productsReducer from "./slices/productsSlice";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";

const reducer = combineReducers({
    productsState: productsReducer,
    productState: productReducer,
    authState: authReducer,
    cartState: cartReducer
})

const store = configureStore({
    reducer,
    middleware:  (getDefaultMiddleware) =>     //instead of this we can use middleware: [thunk] with the import thunk from 'redux-thunk'
    getDefaultMiddleware().concat(thunk),      //But it is not working with redux toolkit, so we are using this way
})

export default store;