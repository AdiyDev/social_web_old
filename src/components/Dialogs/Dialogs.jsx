import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messegesElements = state.messages.map(m => <Message message={m.message}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                {dialogsElements}
            </ul>
            <ul className={s.messages}>
                {messegesElements}
                <li> <textarea placeholder="Enter your message"
                               onChange={onNewMessageChange}
                               value={newMessageBody}/>
                    <button onClick={onSendMessageClick}
                            className={s.buttonBlue + ' ' + s.buttonBlueEffect + ' ' + s.buttonBlueRotate}>add message
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Dialogs;