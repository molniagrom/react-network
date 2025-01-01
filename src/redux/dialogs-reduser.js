const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState =  {
        dialogs: [
            {id: 1, name: 'Alena'},
            {id: 2, name: 'Emily'},
            {id: 3, name: 'Katya'},
            {id: 4, name: 'Yulia'},
            {id: 5, name: 'Ivan'},
            {id: 6, name: 'Masha'},
        ],
        messages: [
            {id: 1, message: 'Hi', isMine: true},
            {id: 2, message: 'How are you?', isMine: false},
            {id: 3, message: 'Cool! How about you?', isMine: true},
            {id: 4, message: 'That\'s fine, too', isMine: false},
        ],
        newMessageText: "I'm a new message"
    }


 export const dialogReducer = (state = initialState, action) => {

     switch (action.type) {
         case ADD_MESSAGE: // this._addMessage()
             if (state.newMessageText === '') {
                 return state;
             }
             let newMessage = {
                 id: state.messages.length + 1,
                 message: state.newMessageText,
                 isMine: true
             };
             return {
                 ...state,
                 messages: [...state.messages, newMessage],
                 newMessageText: "",
             }
         case UPDATE_NEW_MESSAGE_TEXT: // this._upDateMessageText(action.newText)
             return {
                 ...state,
                 newMessageText: action.newText,
             };
             default:
                 return state;
     }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const updateMessageCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
