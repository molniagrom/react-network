import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {EnteringMessages} from "./EnteringMessages/EnteringMessages";

export const Dialogs = (props) => {
    // debugger

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messageElements = state.messages.map(m => <Message key={m.id} message={m.message} isMine={m.isMine}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <EnteringMessages
                    upDateNewMessageBody={props.upDateNewMessageBody}
                    newMessageText={state.newMessageText}
                    dispatch={props.dispatch}
                    addMessage={props.addMessage}
                />
            </div>
        </div>
    )
};