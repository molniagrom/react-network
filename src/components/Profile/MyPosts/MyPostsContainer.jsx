import React from "react";
import {addPostCreator, updateNewPostCreator} from "../../../redux/profile-reduser";
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
        addPost: () => {
            dispatch(addPostCreator());
        },
        upDatePostText: (text) => {
            dispatch(updateNewPostCreator(text));
        }
    }
}

export const MyPostsContainer =
    connect(mapStateToProps, mapDispatchToProps)(MyPosts)