import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Post} from "./MyPosts/Post/Post";
import {upDatePostText} from "../../redux/store";

export const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}
                posts={props.profilePage.posts} />
        </div>
    )
}
