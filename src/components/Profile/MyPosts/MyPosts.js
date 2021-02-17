import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 30},
  ] 

  let postsElements = postsData.map(post => <Post message={post.message} liked={post.likesCount} id={post.id}/>)

    return (
      <div>
        My posts
        <div>
          <div>
            <textarea></textarea>
          </div>
          <button>Add post</button>
        </div>
        <div className={classes.posts}>
          {postsElements}
        </div>
      </div>
    )
}

export default MyPosts;