import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    let {postsData, newPostText, dispatch} = props;
  let postsElements = postsData.map(post => <Post message={post.message} liked={post.likesCount} id={post.id}/>)

    let newPostElement = React.createRef();

  let onAddPost = () => {
    dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
      let text = newPostElement.current.value;
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
  }
    return (
      <div>
        My posts
        <div>
          <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={newPostText}/>
          </div>
          <button onClick={onAddPost}>Add post</button>
        </div>
        <div className={classes.posts}>
          {postsElements}
        </div>
      </div>
    )
}

export default MyPosts;