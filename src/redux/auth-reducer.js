const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
};

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
