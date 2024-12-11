import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Alena'},
        {id: 2, name: 'Emily'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Yulia'},
        {id: 5, name: 'Ivan'},
        {id: 6, name: 'Masha'},
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
    ]


    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageElements = messages.map(m => <Message message={m.message}/>)

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messageElements}
        </div>
    </div>)
}