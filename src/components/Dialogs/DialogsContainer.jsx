import React from "react";
import {Dialogs} from "./Dialogs";
import {addMessageCreator, updateMessageCreator} from "../../redux/dialogs-reduser";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {

                let state = store.getState().dialogsPage;

                let addMessage = () => {
                    store.dispatch(addMessageCreator());
                };

                let onMessageChange = (text) => {
                    store.dispatch(updateMessageCreator(text));
                };


                return <Dialogs
                    upDateNewMessageBody={onMessageChange}
                    state={store.getState()}
                    addMessage={addMessage}
                    dispatch={store.dispatch}
                    dialogsPage={state}
                />
            }}
        </StoreContext.Consumer>

    )
}