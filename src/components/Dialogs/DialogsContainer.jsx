import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux"; 

// функ коннект из реакт редах вызываем конект она вернула нам другую функцию и потом выз функ которую вернул нам новый вызов
// первым вызовом настраиваем контейнерную компоненту

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  } // возвращаем обьект с функциями
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
 // отрисовывается диалогс и в неё засовывается в props обьект со state другой с диспатч

export default DialogsContainer;
