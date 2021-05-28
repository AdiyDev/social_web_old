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
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                <DialogItem name="Arkady" id="1"/>
                <DialogItem name="Ludmila" id="2"/>
                <DialogItem name="Marat" id="3"/>
                <DialogItem name="Danis" id="4"/>
                <DialogItem name="Elena" id="5"/>
                <DialogItem name="Pasha" id="6"/>
            </ul>
            <ul className={s.messages}>
                <Message message="HI"/>
                <Message message="How are your samuraiJS"/>
                <Message message="privet"/>
                <Message message="Zdarov"/>
                <Message message="Kak dela?"/>
                <Message message="Vse normalno"/>
            </ul>
        </div>
    )
}

export default Dialogs;