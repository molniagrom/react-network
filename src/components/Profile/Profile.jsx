import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Post} from "./MyPosts/Post/Post";

export const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts addPost={props.addPost} posts={props.state.posts} />
        </div>
    )
}
