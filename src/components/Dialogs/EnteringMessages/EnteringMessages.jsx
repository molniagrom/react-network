import React from "react";

export const EnteringMessages = (props) => {

    let newMessage = React.createRef()

    let addMessage = () => {
        props.dispatch({type: "ADD-MESSAGE"});
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newText: text});
    };


    return (
        <>
            <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText}></textarea>
            <button onClick={addMessage}>Add message</button>
        </>
    )
}