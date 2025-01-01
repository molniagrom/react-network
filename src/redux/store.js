import {profileReducer} from "./profile-reduser";
import {sidebarReducer} from "./sidebar-reduser";
import {dialogReducer} from "./dialogs-reduser";


export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', quantityLike: 19},
                {id: 2, message: 'It\'s my post!', quantityLike: 5},
                {id: 3, message: 'I\'ll do it myself', quantityLike: 20},
                {id: 3, message: 'I want pizza', quantityLike: 212},
                {id: 3, message: 'So order it', quantityLike: 3},
                {id: 3, message: 'I\'m lazy', quantityLike: 2},
            ],
            newPostText: "I'm happier than anyone..."
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    avatar: 'https://habrastorage.org/getpro/freelansim/allfiles/152/1520/1520307/acca35376b.png',
                    nickname: 'Alena'
                },
                {
                    id: 2,
                    avatar: 'https://avatars.mds.yandex.net/get-shedevrum/11425623/img_02d4a166191b11efb76d9a79ffaf5bd2/orig',
                    nickname: 'Emily'
                },
                {
                    id: 3,
                    avatar: 'https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4668.jpg',
                    nickname: "Nastya"
                },
            ],
        },
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

window.store = store;

