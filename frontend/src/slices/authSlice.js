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
        },
        loadUserRequest(state, action) {
            return {
                ...state,  //Spread operator it takes the previous state values ie isAuthenticated
                isAuthenticated: false,
                loading: true
            };
        },
        loadUserSuccess(state, action) {
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload.user
            };
        },
        loadUserFail(state, action) {
            return {
                ...state,  //Spread operator it takes the previous state values ie isAuthenticated
                loading: false,
                error: action.payload
            };
        },
        logoutSuccess(state, action) {
            return {
                loading: false,
                isAuthenticated: false
            };
        },
        logoutFail(state, action) {
            return {
                ...state,  //Spread operator it takes the previous state values ie isAuthenticated
                error: action.payload
            };
        },
        updateProfileRequest(state, action) {
            return {
                ...state,  //Spread operator it takes the previous state values ie isAuthenticated
                loading: true,
                isUpdated: false
            };
        },
        updateProfileSuccess(state, action) {
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                isUpdated: true
            };
        },
        updateProfileFail(state, action) {
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
    registerFail,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail,
    logoutSuccess,
    logoutFail,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFail
} = actions;

export default reducer;