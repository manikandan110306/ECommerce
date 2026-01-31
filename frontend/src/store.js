import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import productsReducer from "./slices/productsSlice";

const reducer = combineReducers({
    productsState: productsReducer

})

const store = configureStore({
    reducer,
    middleware:  (getDefaultMiddleware) =>     //instead of this we can use middleware: [thunk] with the import thunk from 'redux-thunk'
    getDefaultMiddleware().concat(thunk),      //But it is not working with redux toolkit, so we are using this way
})

export default store;