const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', quantityLike: 19},
        {id: 2, message: 'It\'s my post!', quantityLike: 5},
        {id: 3, message: 'I\'ll do it myself', quantityLike: 20},
        {id: 3, message: 'I want pizza', quantityLike: 212},
        {id: 3, message: 'So order it', quantityLike: 3},
        {id: 3, message: 'I\'m lazy', quantityLike: 2},
    ],
    newPostText: "I'm happier than anyone..."
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText === '') {
                return;
            }
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                quantityLike: 0,
            };
            state.posts.unshift(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
        default:
            return state;

    }

    return state;
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

