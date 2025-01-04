import React from "react";
import {Dialogs} from "./Dialogs";
import {addMessageCreator, updateMessageCreator} from "../../redux/dialogs-reduser";

export const DialogsContainer = (props) => {
    let addMessage = () => {
        props.store.dispatch(addMessageCreator());
    };

    let onMessageChange = (text) => {
        props.store.dispatch(updateMessageCreator(text));
    };

    return (
        <Dialogs
            upDateNewMessageBody={onMessageChange}
            state={props.state}
            dispatch={props.dispatch}
            addMessage={addMessage}
        />
    )
}