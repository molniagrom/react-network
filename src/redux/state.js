let renderEntireFree = () => {
    console.log("state  changed")
}

export let store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', quantityLike: 19},
                {id: 2, message: 'It\'s my post!', quantityLike: 5},
                {id: 3, message: 'I\'ll do it myself', quantityLike: 20},
                {id: 4, message: 'I want pizza', quantityLike: 212},
                {id: 5, message: 'So order it', quantityLike: 3},
                {id: 6, message: 'I\'m lazy', quantityLike: 2},
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
    getState() {
        return this.state
    },
    addPost() {
        if (this.state.profilePage.newPostText === '') {
            return
        }
        let newPost = {
            id: this.state.profilePage.posts.length + 1,
            message: this.state.profilePage.newPostText,
            quantityLike: 0,
        };
        this.state.profilePage.posts.unshift(newPost)
        this.state.profilePage.newPostText = '';
        renderEntireFree(this.state);
    },
    upDatePostText(newText){
        this.state.profilePage.newPostText = newText;
        renderEntireFree(this.state);
    },
    addMessage() {
        if (!this.state.dialogsPage) {
            console.error('dialogsPage is undefined');
            return;
        }

        if (this.state.dialogsPage.newMessageText === '') {
            return
        }

        let newMessage = {
            id: this.state.dialogsPage.messages.length,
            message: this.state.dialogsPage.newMessageText,
            isMine: true
        }

        this.state.dialogsPage.messages.push(newMessage)
        this.state.dialogsPage.newMessageText = ''
        renderEntireFree(this.state);
    },
    upDateMessageText(newText) {
        this.state.dialogsPage.newMessageText = newText;
        renderEntireFree(this.state);
    }
}

window.store = store;

export const subscribe = (observer) => {
    renderEntireFree = observer
}














