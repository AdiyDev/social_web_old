import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you? ", likesCount: 15},
            {id: 2, message: "It's my first post ", likesCount: 10},
            {id: 3, message: "Vas ne slishno ", likesCount: 7},
            {id: 4, message: "Po povodu kapitala prozitocnogo minimuma ", likesCount: 3},
            {id: 5, message: "Kak dela? ", likesCount: 2},
            {id: 6, message: "Kot poel kaktus ", likesCount: 1}
        ],
        textInArea: [
            {message: ''}
        ]
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
            {id: 2, message: "How are your reactJS"},
            {id: 3, message: "privet"},
            {id: 4, message: "Zdarov"},
            {id: 5, message: "Kak dela?"},
            {id: 6, message: "Vse normalno"}
        ]
    },
    sidebar: {
        friends: [
            // {id: 1, name: "Arkady"},
            {id: 2, name: "Ludmila"},
            {id: 3, name: "Marat"},
            {id: 4, name: "Danis"}
            // {id: 5, name: "Elena"},
            // {id: 6, name: "Pasha"}
        ]
    }
};


export let addPost = (postMessage) => {
    let newPost = {
        id: 7,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export let addMessage = (textMessage) => {
    let newMessageItem = {
        id: 7,
        message: textMessage
    };

    state.dialogsPage.messages.push(newMessageItem);
    rerenderEntireTree(state);
};

export let addKeyDownSymbol = (textInArea) => {
    state.profilePage.textInArea.messages = textInArea;
    rerenderEntireTree(state);
}


export default state;