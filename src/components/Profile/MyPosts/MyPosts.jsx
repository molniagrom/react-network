import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', quantityLike: 19},
        {id: 2, message: 'It\'s my post!', quantityLike: 5},
        {id: 3, message: 'I\'ll do it myself', quantityLike: 20},
        {id: 3, message: 'I want pizza', quantityLike: 212},
        {id: 3, message: 'So order it', quantityLike: 3},
        {id: 3, message: 'I\'m lazy', quantityLike: 2},
    ]

    let postsElements = posts.map(p => <Post quantityLike={p.quantityLike} message={p.message}/>)

    return (
        <div className={s.postsBlock}>
            <div>
               <h3>My post</h3>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
