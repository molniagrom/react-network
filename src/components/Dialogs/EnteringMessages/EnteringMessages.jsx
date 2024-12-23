import React from "react";

export const EnteringMessages = (props) => {

    let newMessage = React.createRef()

    let onMessageChange = () => {
        let messages = newMessage.current.value;
        props.upDateMessageText(messages);
    }

    let addMessage = () => {
        // debugger
       props.addMessage()
    }

    return (
        <>
            <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText}></textarea>
            <button onClick={addMessage}>Add message</button>
        </>
    )
}