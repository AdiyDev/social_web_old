// const SEND_MESSAGE = 'SEND-MESSAGE';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// will do state immutability and return shadowCopy state
let initialState = {
    friends: [{
        id: 1,
        name: "Arkady"
    },
    {
        id: 2,
        name: "Ludmila"
    },
    {
        id: 3,
        name: "Marat"
    }
        // {id: 4, name: "Danis"}
        // {id: 5, name: "Elena"},
        // {id: 6, name: "Pasha"}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}


// export const sendMessageCreator = () => ({type: SEND_MESSAGE});
// export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default sidebarReducer;