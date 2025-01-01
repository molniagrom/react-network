import React from "react";
import {addMessageCreator, updateMessageCreator} from "../../../redux/dialogs-reduser";

export const EnteringMessages = (props) => {

    let newMessage = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageCreator());
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateMessageCreator(text));
    };


    return (
        <>
            <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText} placeholder={"Enter your message"}></textarea>
            <button onClick={addMessage}>Add message</button>
        </>
    )
}