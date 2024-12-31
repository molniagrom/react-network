const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

 export const dialogReducer = (state, action) => {

     switch (action.type) {
         case ADD_MESSAGE: // this._addMessage()
             if (state.newMessageText === '') {
                 return;
             }
             let newMessage = {
                 id: state.messages.length + 1,
                 message: state.newMessageText,
                 isMine: true
             };
             state.messages.push(newMessage);
             state.newMessageText = '';
             break;
         case UPDATE_NEW_MESSAGE_TEXT: // this._upDateMessageText(action.newText)
             state.newMessageText = action.newText;
             break;
             default: return state;
     }

     return state;
}