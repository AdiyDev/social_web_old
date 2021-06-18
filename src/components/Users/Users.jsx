import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios"; //импортируй всё что есть в ахиос
import userPhoto from "../../assets/images/user.png"

class Users extends React.Component {

  constructor(props) {
    alert('new')
    super(props) //конструктор является так же как бы и методом жизненного цикла
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }



  //обязательно extends реакт компонент
  render() { // пропсы сюда не приходят прокидывание параметров проходит автоматически
    return <div>
      {this.props.users.map((u) => (
        <div key={Users.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={styles.usersPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id);
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
  }
}

export default Users