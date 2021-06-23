import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.profilePage.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);
  let newPostText = props.profilePage.newPostText;
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <ul className={s.postsBlock}>
      <form className={s.myPostsBlock}>
        <li><h3>My posts</h3></li>
        <li>
          <textarea placeholder={"write something"}
            onChange={onPostChange}
            ref={newPostElement}
            value={newPostText} />
        </li>
        <li>
          <button onClick={onAddPost}
            className={s.buttonBlue + ' ' + s.buttonBlueEffect + ' ' + s.buttonBlueRotate}>add post
          </button>
        </li>
      </form>
      <ul className={s.posts}>
        {postsElements}
      </ul>
    </ul>
  )
}
export default MyPosts;