import React from "react";

export const EnteringMessages = () => {
    let newMessage = React.createRef()
    let addMessage = () => {
        // debugger
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <>
            <textarea ref={newMessage}></textarea>
            <button onClick={addMessage}>Add message</button>
        </>
    )
}