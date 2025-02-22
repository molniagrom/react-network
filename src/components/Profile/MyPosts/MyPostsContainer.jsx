import React from "react";
import {addPostCreator} from "../../../redux/profile-reduser";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostCreator(newPostText));
        },
    }
}

export const MyPostsContainer =
    connect(mapStateToProps, mapDispatchToProps)(MyPosts)