import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/800px-Felis_silvestris_silvestris.jpg", followed: false, fullName: "userName", status: "Hi, i'm good", location: { city: "stav", country: "russia" } },
            { id: 2, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/800px-Felis_silvestris_silvestris.jpg", followed: true, fullName: "userName", status: "Hi, i'm good", location: { city: "stav", country: "belarus" } },
            { id: 3, photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Felis_silvestris_silvestris.jpg/800px-Felis_silvestris_silvestris.jpg", followed: false, fullName: "userName", status: "Hi, i'm good", location: { city: "stav", country: "Kotavia" } }
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={Users.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="" className={styles.usersPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;