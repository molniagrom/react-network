import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {addPostCreator} from "../../../redux/profile-reduser";

export const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post quantityLike={p.quantityLike} message={p.message}/>)
    let newPostElement = React.createRef()

    let addPost = () => {
        // debugger
        // props.addPost();
        props.dispatch(addPostCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.upDatePostText(text);

    }

    return (<div className={s.postsBlock}>
        <div>
            <h3>My post</h3>
        </div>
        <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>)
}
