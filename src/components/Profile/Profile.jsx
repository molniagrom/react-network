import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Post} from "./MyPosts/Post/Post";
import {upDatePostText} from "../../redux/state";

export const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts
                upDatePostText={props.upDatePostText}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                posts={props.profilePage.posts} />
        </div>
    )
}
