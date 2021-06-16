// const SEND_MESSAGE = 'SEND-MESSAGE';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    friends: [
        {id: 1, name: "Arkady"},
        {id: 2, name: "Ludmila"},
        {id: 3, name: "Marat"}
        // {id: 4, name: "Danis"}
        // {id: 5, name: "Elena"},
        // {id: 6, name: "Pasha"}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    // switch (action.type) {
    //     case ADD_POST:
    //         let newPost = {
    //             id: 7,
    //             message: state.newPostText,
    //             likesCount: 0
    //         };
    //
    //         state.posts.push(newPost);
    //         state.newPostText = '';
    //         return state;
    //     case UPDATE_NEW_POST_TEXT:
    //         state.newPostText = action.newText;
    //         return state; //вместо break, что бы switch не проваливался дальше
    //     default: // если ни по одному case не подошел просто возвращает state
    //         return state;
    // }

    return state;
}


// export const sendMessageCreator = () => ({type: SEND_MESSAGE});
// export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default sidebarReducer;