import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {EnteringMessages} from "./EnteringMessages/EnteringMessages";

export const Dialogs = (props) => {
// debugger
    let dialogsElements = props.state.dialogsPage.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messageElements = props.state.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} isMine={m.isMine}/>)

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messageElements}
            <EnteringMessages
                newMessageText={props.state.dialogsPage.newMessageText}
                upDateMessageText={props.upDateMessageText}
                addMessage={props.addMessage} />
        </div>
    </div>)
}