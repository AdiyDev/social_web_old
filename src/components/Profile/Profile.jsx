import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.profileWrapper}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;