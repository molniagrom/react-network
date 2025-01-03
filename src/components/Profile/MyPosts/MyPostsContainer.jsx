import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {addPostCreator, updateNewPostCreator} from "../../../redux/profile-reduser";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = (props) => {

    let postsElements = props.posts.map(p => <Post quantityLike={p.quantityLike} message={p.message}/>)
    let newPostElement = React.createRef()

    let addPost = () => {
        // debugger
        // props.addPost();
        props.dispatch(addPostCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostCreator(text)
        props.dispatch(action);
    }

    return (
        <MyPosts upDatePostText={onPostChange}/>
    )
}
