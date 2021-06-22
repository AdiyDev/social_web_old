import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messegesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />);
  let newMessageBody = props.dialogsPage.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  if (!props.isAuth) return <Redirect to={'/login'} />

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>
        {dialogsElements}
      </ul>
      <ul className={s.messages}>
        {messegesElements}
        <li> <textarea placeholder="Enter your message"
          onChange={onNewMessageChange}
          value={newMessageBody} />
          <button onClick={onSendMessageClick}
            className={s.buttonBlue + ' ' + s.buttonBlueEffect + ' ' + s.buttonBlueRotate}>add message
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Dialogs;