import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import s from "./ProfileInfo.module.css";

export default {
    title: "ProfileInfo",
    component: ProfileInfo,
}

export const ImageAvatarDescription = () => {
    return (
        <div>
            <div>
                <img src="https://linagro.tn/images/entries/700x300/southern-alps-700x300.png"></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
