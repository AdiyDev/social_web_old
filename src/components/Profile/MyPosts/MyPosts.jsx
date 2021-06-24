import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from './../../../utils/validators/validators';


const maxLength10 = maxLengthCreator(10)

const MyPosts = (props) => {
  let postsElements = props.profilePage.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>

      <AddNewPostFormRedux onSubmit={onAddPost} />

      <ul className={s.posts}>
        {postsElements}
      </ul>
    </div>
  )
}

const AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit} >
    <h3>My posts</h3>
    <Field name='newPostText' component='textarea'
      validata={[required, maxLength10]} />
    <button className={s.buttonBlue + ' ' + s.buttonBlueEffect + ' ' + s.buttonBlueRotate}>add post</button>
  </form>
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPosts;

