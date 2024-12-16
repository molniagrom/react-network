import React from "react";
import s from "./Friend.module.css";

export const Friend = (props) => {
    return (
        <div className={s.friend}>
            <img className={s.friendLogo} src={props.avatar} alt="Friend" />
            <span className={s.friendTitle}>{props.nickname}</span>
        </div>
    )
}