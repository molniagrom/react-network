const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state, action) => {

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
        default: return state;

    }

    return state;
}

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

