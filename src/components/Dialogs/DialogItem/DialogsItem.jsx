import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.dialogAvatar}
                 src={"https://st.depositphotos.com/46542440/55685/i/450/depositphotos_556850692-stock-illustration-square-face-character-stiff-art.jpg"}/>
              <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}