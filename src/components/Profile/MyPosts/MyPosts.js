import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} liked={post.likesCount} id={post.id}/>)
    let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
      let text = newPostElement.current.value;
      props.onPostChange(text);
  }
    return (
      <div>
        My posts
        <div>
          <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
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