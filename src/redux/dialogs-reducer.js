const SEND_MESSAGE = "SEND-MESSAGE"

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
  ]
}

const dialogsReducer = (state = initialState, action) => {
  // messages: [...state.messages] делаем копию того, что будем собираться менять
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: body }],
      }
    default:
      return state;
  }
}

export const sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;
