import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = (props) => {
    return (
        <div>
            <div>
                My post
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post quantityLike={19} message="Hi, how are you?" />
                <Post quantityLike={5} message={"It's my post!"} />
                <Post quantityLike={20} message={"I'll do it myself"} />
            </div>
        </div>
    )
}
