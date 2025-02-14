import {authAPI as authAPi, usersAPi} from "../api/api";

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
                ...action.data,
                isAuth: true,
            };

        default:
            return state;
    }
};

// actions
export const setAuthUserData = (userID, email, login) => ({type: SET_USER_DATA, data:{userID, email, login}});

export const getAuthMeThunk = () => {
    return (dispatch) => {
        authAPi.getMe()
            .then((response) => {
                if (response.status === 200 || response.resultCode === 0) {
                    const { id, email, login } = response.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            })
            .catch((error) => {
                console.error("Ошибка при получении данных авторизации:", error);
            });
    };
};
