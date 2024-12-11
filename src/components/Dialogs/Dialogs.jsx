import React from "react";
import s from "./Dialogs.module.css"

export const Dialogs = (props) => {
    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
                Alena
            </div>
            <div className={s.dialog}>
                Yulia
            </div>
            <div className={s.dialog}>
                Katya
            </div>
            <div className={s.dialog}>
                Emily
            </div>
            <div className={s.dialog}>
                Sveta
            </div>
            <div className={s.dialog}>
                Nastya
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How's it going?</div>
            <div className={s.message}>Yo</div>
        </div>
    </div>)
}