import React from 'react';
import s from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendsElements = props.state.friends.map(f => <Friend id={f.id} name={f.name}/>);

    return (
        <div className={s.sideBarFriends}>
            <h3>Friends</h3>
            <ul className={s.ul}>
                {friendsElements}
            </ul>
        </div>
    )
}

export default Friends;