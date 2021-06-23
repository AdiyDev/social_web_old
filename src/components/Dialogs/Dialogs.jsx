import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Field, reduxForm } from "redux-form";
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messegesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />)

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  if (!props.isAuth) return <Redirect to={'/login'} />
  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>
        {dialogsElements}
      </ul>
      <ul className={s.messages}>
        {messegesElements}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </ul>
    </div>
  )
}


const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component='textarea'
        name='newMessageBody'
        placeholder="Enter your message" />
      <button className={s.buttonBlue + ' ' + s.buttonBlueEffect + ' ' + s.buttonBlueRotate}>
        add message
      </button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;