import { initialState, addPostCreator, profileReducer } from "../profile-reduser"; // Убедитесь, что путь правильный

test('ADD_MESSAGE adds a new post', () => {
    const action = addPostCreator();
    const newState = profileReducer(initialState, action);

    expect(newState.posts.length).toBe(initialState.posts.length + 1);
    expect(newState.posts[0].message).toBe(initialState.newPostText);
    expect(newState.newPostText).toBe('');
});



