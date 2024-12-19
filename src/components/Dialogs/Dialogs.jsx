import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {EnteringMessages} from "./EnteringMessages/EnteringMessages";
import {addMessage, upDateMessageText} from "../../redux/state";

export const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageElements = props.state.messages.map(m => <Message key={m.id} message={m.message} isMine={m.isMine}/>)

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messageElements}
            <EnteringMessages
                newMessageText={props.state.newMessageText}
                upDateMessageText={props.upDateMessageText}
                addMessage={props.addMessage} />
        </div>
    </div>)
}