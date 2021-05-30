import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <ul className={s.postsBlock}>
            <ul className={s.myPostsBlock}>
                <li><h3>My posts</h3></li>
                <li><textarea></textarea></li>
                <li>
                    <button className={s.buttonBlue + ' ' + s.buttonBlueEffect + ' ' + s.buttonBlueRotate}>add post</button>
                </li>
            </ul>
            <ul className={s.posts}>
                {postsElements}
            </ul>
        </ul>
    )
}
export default MyPosts;