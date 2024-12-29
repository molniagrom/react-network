import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";



export const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post quantityLike={p.quantityLike} message={p.message}/>)
    let newPostElement = React.createRef()

    let addPost = () => {
        // debugger
        // props.addPost();
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.upDatePostText(text);
        let action = updateNewPostActionCreator(text)
        props.dispatch(action);
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
