import React from "react";
import s from "./Friend.module.css";

export const Friend = (props) => {
    return (
        <div>
            <img className={s.friendLogo} src={props.avatar} alt="Friend" />
            <span className={s.friendTitle}>{props.name}</span>
        </div>
    )
}