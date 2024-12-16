import React from "react";
import s from "./../Dialogs.module.css"

export const Message = (props) => {
    const messageClass = props.isMine ? s.myMessage : s.theirMessage

    return (
        <div className={`${s.message} ${messageClass}`}>{props.message}</div>
    )
}

