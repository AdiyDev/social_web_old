import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <li className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </li>
    )
}

const Message = (props) => {
    return (
        <li className={s.message}>{props.message}</li>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Arkady"},
        {id: 2, name: "Ludmila"},
        {id: 3, name: "Marat"},
        {id: 4, name: "Danis"},
        {id: 5, name: "Elena"},
        {id: 6, name: "Pasha"}
    ]

    let messagesDate = [
        {id: 1, message: "HI"},
        {id: 2, message: "How are your reactJS"},
        {id: 3, message: "privet"},
        {id: 4, message: "Zdarov"},
        {id: 5, message: "Kak dela?"},
        {id: 6, message: "Vse normalno"}
    ]

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </ul>
            <ul className={s.messages}>
                <Message message={messagesDate[0].message}/>
                <Message message={messagesDate[1].message}/>
                <Message message={messagesDate[2].message}/>
                <Message message={messagesDate[3].message}/>
                <Message message={messagesDate[4].message}/>
                <Message message={messagesDate[5].message}/>
            </ul>
        </div>
    )
}

export default Dialogs;