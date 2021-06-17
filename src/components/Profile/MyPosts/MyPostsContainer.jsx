import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux"; 
import {addPostActionCreator,updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
  }
    }
  } // возвращаем обьект с функциями
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
