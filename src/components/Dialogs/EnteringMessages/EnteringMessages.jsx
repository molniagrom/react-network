import React from "react";

export const EnteringMessages = (props) => {
    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        if (props.upDateNewMessageBody) { // Проверка на наличие функции
            props.upDateNewMessageBody(text);
        } else {
            console.error("upDateNewMessageBody is not a function");
        }
    };

    return (
        <>
            <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText} placeholder={"Enter your message"}></textarea>
            <button onClick={addMessage}>Add message</button>
        </>
    )
};