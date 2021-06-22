import React from "react";
import Dialogs from "./Dialogs";
import { sendMessage, updateNewMessageBody, } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

// функ коннект из реакт редах вызываем конект она вернула нам другую функцию и потом выз функ которую вернул нам новый вызов
// первым вызовом настраиваем контейнерную компоненту

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage, // пришла новая ссылка на обьект и поэтому перерисовывается
    isAuth: state.auth.isAuth
  }
}

const DialogsContainer = connect(mapStateToProps, { updateNewMessageBody, sendMessage })(Dialogs);
// отрисовывается диалогс и в неё засовывается в props обьект со state другой с диспатч

export default DialogsContainer;
