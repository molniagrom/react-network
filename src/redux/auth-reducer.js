import {authAPI as authAPi} from "../api/api";

// Делаем более уникальные actions (redux-ducks)

const SET_USER_DATA = "auth/SET_USER_DATA";
export const SET_ERROR = 'auth/SET_ERROR';


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
        case SET_ERROR:
            return {
                ...state,
                errorAuth: action.payload,
            }
        default:
            return state;
    }
};

// actions
export const setAuthUserData = (userID, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userID, email, login, isAuth}
});
export const setError = (errorMessage) => {
    return {
        type: SET_ERROR,
        payload: errorMessage
    };
}

export const getAuthMeThunk = () => async (dispatch) => {
    let response = await authAPi.getMe()

    if (response.status === 200 || response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

};

export const login = (email, password, rememberMe) => async (dispatch) => {
    try {
        let response = await authAPi.login(email, password, rememberMe);

        if (response.status === 200 || response.resultCode === 0) {
            dispatch(getAuthMeThunk());
            dispatch(setError(null)); // Убираем ошибку, если вход успешен
        } else {
            const errorMessage = response.messages?.[0] || "Ошибка авторизации";
            dispatch(setError(errorMessage));
        }
    } catch (error) {
        dispatch(setError("Ошибка сети. Попробуйте позже."));
        console.error("Ошибка при авторизации:", error);
    }
};


export const logout = () => async (dispatch) => {
    try {
        let response = await authAPi.logout();

        if (response.status === 200 || response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        } else {
            const errorMessage = response.messages?.[0] || "Ошибка при выходе";
            dispatch(setError(errorMessage));
            console.warn("Ошибка выхода:", errorMessage);
        }
    } catch (error) {
        dispatch(setError("Ошибка сети. Попробуйте позже."));
        console.error("Ошибка при выходе:", error);
    }
};
