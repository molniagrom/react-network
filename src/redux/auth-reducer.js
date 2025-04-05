import {authAPI as authAPi, securityAPI, usersAPi as usersAPI} from "../api/api";

// Делаем более уникальные actions (redux-ducks)

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";
export const SET_ERROR = 'auth/SET_ERROR';
const SET_MY_PROFILE = "auth/SET_MY_PROFILE";


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
    myAvatar: null,
};

// debugger
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_ERROR:
        case GET_CAPTCHA_URL_SUCCESS:

            return {
                ...state,
                ...action.payload,
            };

        case SET_MY_PROFILE:

            return {
                ...state,
                myProfile: action.profile
            };
        default:
            return state;
    }
};

// actions
export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userID: id, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});
export const setError = (errorMessage) => {
    return {
        type: SET_ERROR,
        payload: errorMessage
    };
}
export const setMyProfile = (profile) => (
    {type: SET_MY_PROFILE, profile}
);


export const getAuthMeThunk = () => async (dispatch) => {
    let response = await authAPi.getMe();

    if (response.status === 200 || response.resultCode === 0) {
        const {id, email, login} = response.data;
        await dispatch(setAuthUserData(id, email, login, true));
    }

    return response; // 💡 ВАЖНО: верни результат
};


// thunk
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    try {
        let response = await authAPi.login(email, password, rememberMe, captcha);

        if (response.status === 200 || response.resultCode === 0) {
            dispatch(getAuthMeThunk());
            dispatch(setError(null)); // Убираем ошибку, если вход успешен
        } else {
            if (response.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
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

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaURL()
    const captchaUrl = response.url
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const getMyProfile = () => async (dispatch, getState) => {
   // debugger
    const userId = getState().auth.id;  // используйте `id`, а не `userId`
    if (userId) {
        const response = await usersAPI.getProfile(userId);
        dispatch(setMyProfile(response.data));  // обновляем профиль в стейте
    }
};
