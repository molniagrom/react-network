import React from "react";
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://linagro.tn/images/entries/700x300/southern-alps-700x300.png"></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZGW2MjMvckMP-lGvROqZ6IEa_mL1soMWDQ&s"></img> */}
            </div>
        </div>
    )
}
