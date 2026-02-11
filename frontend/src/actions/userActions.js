import axios from 'axios';
import {
    loginFail,
    loginRequest, 
    loginSuccess, 
    clearError,
    registerFail,
    registerRequest,
    registerSuccess,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail,
    logoutSuccess,
    logoutFail,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFail,
    updatePasswordRequest,
    updatePasswordSuccess,
    updatePasswordFail,
    forgotPasswordRequest,
    forgotPasswordSuccess,
    forgotPasswordFail,
    resetPasswordRequest,
    resetPasswordSuccess,
    resetPasswordFail
} from '../slices/authSlice';

// LOGIN
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch(loginRequest());
        const { data } = await axios.post(`/api/v1/login`, { email, password });
        dispatch(loginSuccess(data));
    } catch (error) {
        dispatch(loginFail(error.response?.data?.message));
    }
};

// CLEAR ERROR
export const clearAuthError = () => (dispatch) => {
    dispatch(clearError());
};

// REGISTER
export const register = (userData) => async (dispatch) => {
    try {
        dispatch(registerRequest());
        const config = {
            headers: { 'Content-type': 'multipart/form-data' }
        };

        const { data } = await axios.post(`/api/v1/register`, userData, config);
        dispatch(registerSuccess(data));
    } catch (error) {
        dispatch(registerFail(error.response?.data?.message));
    }
};

// LOAD USER
export const loadUser = () => async (dispatch) => {
    try {
        dispatch(loadUserRequest());
        const { data } = await axios.get(`/api/v1/myprofile`);
        dispatch(loadUserSuccess(data));
    } catch (error) {
        dispatch(loadUserFail(error.response?.data?.message));
    }
};

// LOGOUT
export const logout = () => async (dispatch) => {
    try {
        await axios.get(`/api/v1/logout`);
        dispatch(logoutSuccess());
    } catch (error) {
        dispatch(logoutFail(error.response?.data?.message));
    }
};

// UPDATE PROFILE
export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch(updateProfileRequest());
        const config = {
            headers: { 'Content-type': 'multipart/form-data' }
        };

        const { data } = await axios.put(`/api/v1/update`, userData, config);
        dispatch(updateProfileSuccess(data));
    } catch (error) {
        dispatch(updateProfileFail(error.response?.data?.message));
    }
};

// UPDATE PASSWORD
export const updatePassword = (formData) => async (dispatch) => {
    try {
        dispatch(updatePasswordRequest());
        const config = {
            headers: { 'Content-type': 'application/json' }
        };

        await axios.put(`/api/v1/password/change`, formData, config);
        dispatch(updatePasswordSuccess());
    } catch (error) {
        dispatch(updatePasswordFail(error.response?.data?.message));
    }
};

// FORGOT PASSWORD
export const forgotPassword = (formData) => async (dispatch) => {
    try {
        dispatch(forgotPasswordRequest());
        const config = {
            headers: { 'Content-type': 'application/json' }
        };

        const { data } = await axios.post(`/api/v1/password/forgot`, formData, config);
        dispatch(forgotPasswordSuccess(data));
    } catch (error) {
        dispatch(forgotPasswordFail(error.response?.data?.message));
    }
};

// RESET PASSWORD
export const resetPassword = (formData, token) => async (dispatch) => {
    try {
        dispatch(resetPasswordRequest());
        const config = {
            headers: { 'Content-type': 'application/json' }
        };

        const { data } = await axios.post(`/api/v1/password/reset/${token}`, formData, config);
        dispatch(resetPasswordSuccess(data));
    } catch (error) {
        dispatch(resetPasswordFail(error.response?.data?.message));
    }
};
