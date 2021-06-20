const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
  dialogs: [
    { id: 1, name: "Arkady" },
    { id: 2, name: "Ludmila" },
    { id: 3, name: "Marat" },
    { id: 4, name: "Danis" },
    { id: 5, name: "Elena" },
    { id: 6, name: "Pasha" },
  ],
  messages: [
    { id: 1, message: "HI" },
    { id: 2, message: "How are your React-Redux?" },
    { id: 3, message: "Privet" },
    { id: 4, message: "Dobrogo vremeni sutok" },
    { id: 5, message: "Kak dela?" },
    { id: 6, message: "Vse normalno, blagodaru" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  // messages: [...state.messages] делаем копию того, что будем собираться менять
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: body }],
        newMessageBody: "",
      };
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
