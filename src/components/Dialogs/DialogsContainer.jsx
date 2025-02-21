import {Dialogs} from "./Dialogs";
import {addMessageCreator, updateMessageCreator} from "../../redux/dialogs-reduser";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageCreator(newMessageText));
        },
        upDateNewMessageBody: (text) => {
            dispatch(updateMessageCreator(text));
        }

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// export const DialogsContainer
//     = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);