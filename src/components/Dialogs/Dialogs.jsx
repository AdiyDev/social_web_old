import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/store";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messegesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let updateNewMessageText = () => {
        let newMessage = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(newMessage))
    }

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                {dialogsElements}
            </ul>
            <ul className={s.messages}>
                {messegesElements}
                <li> <textarea onChange={updateNewMessageText}
                               ref={newMessageElement}
                               value={props.dialogsPage.newMessageText}/>
                    <button onClick={addMessage}
                            className={s.buttonBlue + ' ' + s.buttonBlueEffect + ' ' + s.buttonBlueRotate}>add message
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Dialogs;