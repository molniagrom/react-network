import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Post} from "./MyPosts/Post/Post";
import {upDatePostText} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = (props) => {
// debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />

        </div>
    )
}
