import { initialState, addMessageCreator, dialogReducer } from "../dialogs-reduser"; // Убедитесь, что путь правильный

test('ADD_MESSAGE adds a new message', () => {
    const action = addMessageCreator();
    const newState = dialogReducer(initialState, action);

    expect(newState.messages.length).toBe(initialState.messages.length + 1);
    expect(newState.messages[newState.messages.length - 1].message).toBe(initialState.newMessageText);
    expect(newState.newMessageText).toBe('');
});

