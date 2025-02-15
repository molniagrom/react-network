import {Dialogs} from "./Dialogs";
import {addMessageCreator, updateMessageCreator} from "../../redux/dialogs-reduser";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator());
        },
        upDateNewMessageBody: (text) => {
            dispatch(updateMessageCreator(text));
        }

    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer
    = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);