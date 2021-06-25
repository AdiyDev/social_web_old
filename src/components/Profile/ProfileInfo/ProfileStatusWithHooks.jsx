import React, { useState } from 'react';
// import s from "./ProfileInfo.module.css";

// let arr = [0, () => {}]
// let [a, setA] = arr

const ProfileStatusWithHooks = (props) => {

  // let stateWithSetState = useState(true) //локальный стейт возвращает массив 2 элемента в нём сидят
  // let editMode = stateWithSetState[0] //первым юзстейт хранится в стейте непосредственно 
  // let setEditMode = stateWithSetState[1] //вторым функция которая будет изменять первое это значение из стейт [0]
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  const activeteEditMode = () => {
    setEditMode(true)
  }

  const deactiveteEditMode = () => {
    //берется из React.Componentт передаем обьект свойства который перезапишет свойства в нашем локальном стейте
    setEditMode(false)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
    props.updateStatus(status)
  }

  const handleFocus = (e) => {
    e.target.select()
  }


  return (
    <ul>
      {!editMode &&
        <li><span onDoubleClick={activeteEditMode}>{status || '------'}</span></li>
      }
      {editMode &&
        <li><input
          autoFocus={true}
          onBlur={deactiveteEditMode}
          onChange={onStatusChange}
          onFocus={handleFocus}
          value={status}

        /></li>
      }
    </ul >
  )
}

export default ProfileStatusWithHooks;