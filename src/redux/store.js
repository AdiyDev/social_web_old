let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you? ", likesCount: 15},
                {id: 2, message: "It's my first post ", likesCount: 10},
                {id: 3, message: "Kak tebe takoe Elon Sobaks? ", likesCount: 7},
                {id: 4, message: "Primu v dar Korm dla puppies, ya mnogodetniy papka ", likesCount: 3},
                {id: 5, message: "Kak dela? ", likesCount: 2},
                {id: 6, message: "Kot poel kaktus ", likesCount: 1}
            ],
            newPostText: 'write meaningfully'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Arkady"},
                {id: 2, name: "Ludmila"},
                {id: 3, name: "Marat"},
                {id: 4, name: "Danis"},
                {id: 5, name: "Elena"},
                {id: 6, name: "Pasha"}
            ],
            messages: [
                {id: 1, message: "HI"},
                {id: 2, message: "How are your React-Redux?"},
                {id: 3, message: "Privet"},
                {id: 4, message: "Dobrogo vremeni sutok"},
                {id: 5, message: "Kak dela?"},
                {id: 6, message: "Vse normalno, blagodaru"}
            ],
            newMessageText: 'write anything'
        },
        sidebar: {
            friends: [
                {id: 1, name: "Arkady"},
                {id: 2, name: "Ludmila"},
                {id: 3, name: "Marat"}
                // {id: 4, name: "Danis"}
                // {id: 5, name: "Elena"},
                // {id: 6, name: "Pasha"}
            ]
        }
    },
    _callSubscriber() {
        console.log("state was changed");
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            // this._addPost()
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessageItem = {
                id: 7,
                message: this._state.dialogsPage.newMessageText
            };

            this._state.dialogsPage.messages.push(newMessageItem);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}

export default store;