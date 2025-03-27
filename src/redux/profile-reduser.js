import {profileAPI, usersAPi} from "../api/api";

const ADD_POST = "profileReducer/ADD-POST";
const SET_USER_PROFILE = "profileReducer/SET_USER_PROFILE";
const SET_STATUS = "profileReducer/SET_STATUS";
const DELETE_POST = "profileReducer/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "profileReducer/SAVE_PHOTO_SUCCESS";
const SAVE_PROFILE_SUCCESS = "profileReducer/SAVE_PROFILE_SUCCESS";
const SET_ERROR = "profileReducer/SET_ERROR"; // Добавь константу

export let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', quantityLike: 19},
        {id: 2, message: 'It\'s my post!', quantityLike: 5},
        {id: 3, message: 'I\'ll do it myself', quantityLike: 20},
        {id: 4, message: 'I want pizza', quantityLike: 212},
        {id: 5, message: 'So order it', quantityLike: 3},
        {id: 6, message: 'I\'m lazy', quantityLike: 2},
        {id: 7, message: 'I\'m hungry', quantityLike: 1000},
    ],
    newPostText: "I'm happier than anyone...",
    profile: null,
    status: "",
    error: "", // добавлено
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (action.newPostText === '') {
                return state;
            }
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                quantityLike: 0,
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
            };

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }

        case SET_STATUS: {
            return {...state, status: action.status};
        }

        case SET_ERROR: // Добавляем обработку ошибки
            return {
                ...state,
                error: action.errorMessage,
            };

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            };
        }

        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            };
        }

        case SAVE_PROFILE_SUCCESS: {
            return { ...state, profile: action.profile };
        }

        default:
            return state;
    }
};

// Экшены
export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const setError = (errorMessage) => ({ type: SET_ERROR, errorMessage });

export const getProfile = (userID) => async (dispatch) => {
    const id = userID || 32155
    let response = await usersAPi.getProfile(id)
    dispatch(setUserProfile(response))
}

export const getStatus = (userID) => async (dispatch) => {
    const id = userID || 32155
    let response = await profileAPI.getStatus(id)
    dispatch(setStatus(response))
}

export const upDateStatus = (status) => async (dispatch) => {
    // в response будет сидеть результат которым "за-resolve-ится" Promise, который возвращает function upDateStatus
    let response = await profileAPI.upDateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)

    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))
    }
}
export const saveProfile = (profileData) => (dispatch) => {
    return profileAPI.saveProfileToAPI(profileData)
        .then(response => {
            console.log("Ответ сервера:", response);
            if (response.resultCode === 0) {
                dispatch(setUserProfile(profileData));
                dispatch(setError(null))
                console.log("Профиль обновлён в Redux:", profileData);
            } else {
                dispatch(setError(response.messages[0]));
                console.log(response.messages[0]);
                return Promise.reject(new Error(response.messages[0]));
            }
        })
        .catch(error => {
            console.error("Ошибка при сохранении профиля:", error);
            return Promise.reject(error);
        });
};


