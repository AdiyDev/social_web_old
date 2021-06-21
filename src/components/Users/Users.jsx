import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png"
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []


  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div>
    <div>
      {pages.map(p => {
        return <button className={props.currentPage === p && styles.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</button>
      })}
    </div>
    {props.users.map((u) => (// props становится свойством этого обьекта (класса Users)
      <div key={Users.id}>
        <span>
          <div>
            <NavLink to={"/profile/" + u.id}>
              <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={styles.usersPhoto} />
            </NavLink>
          </div>
          <div>
            {u.followed ? (<button onClick={() => {

              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "b78357c3-0753-4bd0-b470-22121b13c54f"
                  }
                })
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.unfollow(u.id)
                  }
                })
            }}>Unfollow</button>)
              : (<button onClick={() => {

                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "b78357c3-0753-4bd0-b470-22121b13c54f"
                    }
                  })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id)
                    }
                  })
              }}>Follow</button>)}

            {/*  api key */}
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
          </span>
        </span>
      </div >
    ))}
  </div >
}

export default Users