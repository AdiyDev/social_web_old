import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postDate = [
        {id: 1, message: "Hi, how are you? ", likesCount: " 15"},
        {id: 2, message: "It's my first post ", likesCount: " 10"},
        {id: 3, message: "privet ", likesCount: " 7"},
        {id: 4, message: "Zdarov", likesCount: "3"},
        {id: 5, message: "Kak dela?", likesCount: "2"},
        {id: 6, message: "Vse normalno", likesCount: "1"}
    ]

    return (
        <ul className={s.postsBlock}>
            <li className={s.myPostsBlock}>
                <h3>My posts</h3>
                <textarea></textarea>
                <button className={s.buttonBlue + ' ' + s.buttonBlueEffect + ' ' + s.buttonBlueRotate}>add post</button>
            </li>
            <li className={s.posts}>
                <Post message={postDate[0].message} likesCount={postDate[0].likesCount}/>
                <Post message={postDate[1].message} likesCount={postDate[1].likesCount}/>
                <Post message={postDate[2].message} likesCount={postDate[2].likesCount}/>
            </li>
        </ul>
    )
}
export default MyPosts;