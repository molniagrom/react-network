import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = (props) => {
    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={"/dialogs/1"}>Alena</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to={"/dialogs/2"}>Yulia</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to={"/dialogs/3"}>Katya</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to={"/dialogs/4"}>Emily</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to={"/dialogs/5"}>Sveta</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to={"/dialogs/6"}>Nastya</NavLink>
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How's it going?</div>
            <div className={s.message}>Yo</div>
        </div>
    </div>)
}