import {profileAPI, usersAPi} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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

        default:
            return state;
    }
};

// Экшены
export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (userID) => {
    return (dispatch) => {
        const id = userID || 2
        usersAPi.getProfile(id)
            .then((data) => {
                dispatch(setUserProfile(data))
            })
    }
}
export const getStatus = (userID) => {
    return (dispatch) => {
        const id = userID || 2
        // I wrote here getProfile
        profileAPI.getStatus(id)
            .then((response) => {
                dispatch(setStatus(response))
            })
    }
}
export const upDateStatus = (status) => {
    return (dispatch) => {
        profileAPI.upDateStatus(status)
            .then((data) => {
                if(data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}