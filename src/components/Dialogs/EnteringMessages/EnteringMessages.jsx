import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/state";

export const EnteringMessages = (props) => {

    let newMessage = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateMessageActionCreator(text));
    };


    return (
        <>
            <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText}></textarea>
            <button onClick={addMessage}>Add message</button>
        </>
    )
}