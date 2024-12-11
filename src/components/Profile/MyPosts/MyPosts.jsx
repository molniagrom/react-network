import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = (props) => {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', quantityLike: 19},
        {id: 2, message: 'It\'s my post!', quantityLike: 5},
        {id: 3, message: 'I\'ll do it myself', quantityLike: 20},
    ]

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
                <Post quantityLike={postsData[0].quantityLike} message={postsData[0].message}/>
                <Post quantityLike={postsData[1].quantityLike} message={postsData[1].message}/>
                <Post quantityLike={postsData[2].quantityLike} message={postsData[2].message}/>
            </div>
        </div>
    )
}
