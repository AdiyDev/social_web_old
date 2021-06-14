import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(newText))
    }

    return (
        <ul className={s.postsBlock}>
            <ul className={s.myPostsBlock}>
                <li><h3>My posts</h3></li>
                <li>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.profilePage.newPostText}/>
                </li>
                <li>
                    <button onClick={addPost}
                            className={s.buttonBlue + ' ' + s.buttonBlueEffect + ' ' + s.buttonBlueRotate}>add post
                    </button>
                </li>
            </ul>
            <ul className={s.posts}>
                {postsElements}
            </ul>
        </ul>
    )
}
export default MyPosts;