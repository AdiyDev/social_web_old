import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios"; //импортируй всё что есть в ахиос
import userPhoto from "../../assets/images/user.png"
const Users = (props) => {

  let getUsers = () => {
    if (props.users.length === 0) {

      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          props.setUsers(response.data.items)
        })
    }
  }
  //отправляем адрес на сервак через axios.get
  //then когда будет ответ (можем выполнить какую-либо логику)
  return <div>
    <button onClick={getUsers}>Get Users</button>
    {props.users.map((u) => (
      <div key={Users.id}>
        <span>
          <div>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={styles.usersPhoto} />
          </div>
          <div>
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
          </span>
        </span>
      </div>
    ))}
  </div>
};

export default Users;
