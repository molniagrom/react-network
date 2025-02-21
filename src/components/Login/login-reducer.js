import {loginAPI} from "../../api/api";

const MY_LOGIN_AUTHORIZE = "MY_LOGIN_AUTHORIZE"
const MY_LOGIN_ERROR = "MY_LOGIN_ERROR"

let initialState = {
    email: null,
    password: null,
    rememberMe: null,
    successfulAuthorization: false,
    errorMessage: null,
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case MY_LOGIN_AUTHORIZE:
           return {
               ...state,
               email: action.payload.email,
               password: action.payload.password,
               rememberMe: action.payload.rememberMe,
               successfulAuthorization: true,
               errorMessage: null,
           };
           case MY_LOGIN_ERROR:
               return {
                   ...state,
                   successfulAuthorization: false,
                   errorMessage: action.payload,
               }
        default:
            return state;
    }
};

export const authorizeCreator = (formData) => ({
    type: MY_LOGIN_AUTHORIZE,
    payload: formData,
});
export const loginErrorCreator = (error) => ({
    type: MY_LOGIN_AUTHORIZE,
    payload: error,
});

export const authorizeThunk = (formData) => {
    return (dispatch) => {
        loginAPI.getAuthorize(formData)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(authorizeCreator(formData))
                } else {
                    dispatch(loginErrorCreator(data.messages[0] || "Ошибка входа"))
                }
            })
    }
}