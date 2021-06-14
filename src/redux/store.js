const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

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
            newMessageBody: ''
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
        console.log("state changed");
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = {
                id: 7,
                message: this._state.dialogsPage.newMessageBody
            };

            this._state.dialogsPage.messages.push(body);
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator= (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default store;