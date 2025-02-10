import {Dialogs} from "./Dialogs";
import {addMessageCreator, updateMessageCreator} from "../../redux/dialogs-reduser";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
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

export const DialogsContainer
    = connect(mapStateToProps, mapDispatchToProps)(Dialogs);