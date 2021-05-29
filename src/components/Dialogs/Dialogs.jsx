import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Arkady"},
        {id: 2, name: "Ludmila"},
        {id: 3, name: "Marat"},
        {id: 4, name: "Danis"},
        {id: 5, name: "Elena"},
        {id: 6, name: "Pasha"}
    ]

    let messages = [
        {id: 1, message: "HI"},
        {id: 2, message: "How are your reactJS"},
        {id: 3, message: "privet"},
        {id: 4, message: "Zdarov"},
        {id: 5, message: "Kak dela?"},
        {id: 6, message: "Vse normalno"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messegesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                {dialogsElements}
            </ul>
            <ul className={s.messages}>
                {messegesElements}
            </ul>
        </div>
    )
}

export default Dialogs;