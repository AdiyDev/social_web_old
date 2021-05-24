import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
    return (
        <ul className={s.posts}>
            <li>
                <p>My posts</p>
                <textarea></textarea>
                <button>add post</button>
            </li>
            <li className={s.posts}>
                <Post message="Hi, how are you?" likeCount="15" />
                <Post message="It's my first post" likeCount="20" />
            </li>
        </ul>
    )
}
export default MyPosts;