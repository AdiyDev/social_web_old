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
                <Post message="Hi, how are you?" likeCount=" 10 " />
                <Post message="It's my first post" likeCount=" 15 " />
            </li>
        </ul>
    )
}
export default MyPosts;