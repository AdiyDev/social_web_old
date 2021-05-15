import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <ul className={s.posts}>
            <li>
                <p>My posts</p>
                <textarea></textarea>
                <button>add post</button>
            </li>
            <Post />
            <Post />
            <Post />
            <Post />
        </ul>
    )
}
export default MyPosts;