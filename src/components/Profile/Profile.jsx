import React from "react";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} upDateStatus={props.upDateStatus}/>
            <MyPostsContainer />
        </div>
    )
}