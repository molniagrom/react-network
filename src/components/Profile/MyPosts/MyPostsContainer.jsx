import React from "react";
import {addPostCreator, updateNewPostCreator} from "../../../redux/profile-reduser";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = (props) => {
// debugger
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostCreator(text)
        props.store.dispatch(action);
    }

    return (
        <MyPosts
            upDatePostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}
