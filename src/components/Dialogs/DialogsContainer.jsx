import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={sendMessage} dialogsPage={state}/>
}

export default DialogsContainer;