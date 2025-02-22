const ADD_MESSAGE = "ADD-MESSAGE";

export let initialState = {
    dialogs: [
        { id: 1, name: "Alena" },
        { id: 2, name: "Emily" },
        { id: 3, name: "Katya" },
        { id: 4, name: "Yulia" },
        { id: 5, name: "Ivan" },
        { id: 6, name: "Masha" },
    ],
    messages: [
        { id: 1, message: "Hi", isMine: true },
        { id: 2, message: "How are you?", isMine: false },
        { id: 3, message: "Cool! How about you?", isMine: true },
        { id: 4, message: "That's fine, too", isMine: false },
    ],
};

export const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (!action.newMessageText.trim()) return state; // Проверяем, что сообщение не пустое
            let newMessage = {
                id: state.messages.length + 1,
                message: action.newMessageText,
                isMine: true
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };

        default:
            return state;
    }
};

// Action Creators
export const addMessageCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText});
