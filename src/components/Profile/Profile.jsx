import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.profileWrapper}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     store={props.store}

                     // addPost={props.addPost}
                     // updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;