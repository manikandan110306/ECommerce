import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        isAuthenticated: false
    },
    reducers: {
        loginRequest(state, action) {
            return {
                ...state,  //Spread operator it takes the previous state values ie isAuthenticated
                loading: true
            };
        },
        loginSuccess(state, action) {
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload.user
            };
        },
        loginFail(state, action) {
            return {
                ...state,  //Spread operator it takes the previous state values ie isAuthenticated
                loading: false,
                error: action.payload
            };
        },
        clearError(state, action) {
            return {
                ...state,  //Spread operator it takes the previous state values ie isAuthenticated
                error: null
            };
        },
        registerRequest(state, action) {
            return {
                ...state,  //Spread operator it takes the previous state values ie isAuthenticated
                loading: true
            };
        },
        registerSuccess(state, action) {
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload.user
            };
        },
        registerFail(state, action) {
            return {
                ...state,  //Spread operator it takes the previous state values ie isAuthenticated
                loading: false,
                error: action.payload
            };
        }
    },
});

const { actions, reducer } = authSlice;

export const { 
    loginRequest, 
    loginSuccess, 
    loginFail, 
    clearError,
    registerRequest,
    registerSuccess,
    registerFail
} = actions;

export default reducer;