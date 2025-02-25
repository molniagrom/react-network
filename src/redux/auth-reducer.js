import {authAPI as authAPi} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
};

// debugger
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            // debugger
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

// actions
export const setAuthUserData = (userID, email, login, isAuth) => ({type: SET_USER_DATA, payload:{userID, email, login, isAuth}});

export const getAuthMeThunk = () => {
    return (dispatch) => {
        authAPi.getMe()
            .then((response) => {
                if (response.status === 200 || response.resultCode === 0) {
                    const { id, email, login } = response.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            })
            .catch((error) => {
                console.error("Ошибка при получении данных авторизации:", error);
            });
    };
};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPi.login(email, password, rememberMe)
            .then((response) => {
                if (response.status === 200 || response.resultCode === 0) {
                    dispatch(getAuthMeThunk());
                }
            })
            .catch((error) => {
                console.error("Ошибка при получении данных авторизации:", error);
            });
    };
};

export const logout = () => {
    return (dispatch) => {
        authAPi.logout()
            .then((response) => {
                if (response.status === 200 || response.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
            .catch((error) => {
                console.error("Ошибка при получении данных авторизации:", error);
            });
    };
};
