import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems}>
                <li className={s.dialog + ' ' + s.active}>Arkady</li>
                <li className={s.dialog}>Ludmila</li>
                <li className={s.dialog}>Slavik</li>
                <li className={s.dialog}>Danis</li>
                <li className={s.dialog}>Elena</li>
                <li className={s.dialog}>Pasha</li>
            </ul>
            <ul className={s.messages}>
                <li className={s.message}>Hi</li>
                <li className={s.message}>How are your samuraiJS</li>
                <li className={s.message}>privet</li>
            </ul>
        </div>
    )
}

export default Dialogs;