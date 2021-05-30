import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    let posts = [
        {id: 1, message: "Hi, how are you? ", likesCount: " 15"},
        {id: 2, message: "It's my first post ", likesCount: " 10"},
        {id: 3, message: "privet ", likesCount: " 7"},
        {id: 4, message: "Zdarov ", likesCount: " 3"},
        {id: 5, message: "Kak dela? ", likesCount: " 2"},
        {id: 6, message: "Vse normalno ", likesCount: " 1"}
    ]

    return (
        <div className={s.profileWrapper}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile;