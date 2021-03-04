import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let newPostText = state.profilePage.newPostText;

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
      let action = updateNewPostTextActionCreator(text);
      props.store.dispatch(action);
  }
    return (
      <MyPosts addPost={onAddPost} onPostChange={onPostChange} newPostText={newPostText} posts={state.profilePage.posts}/>
    )
}

export default MyPostsContainer;