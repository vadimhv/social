import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
      <div className={classes.item}>
        <img src="https://lh3.googleusercontent.com/proxy/stCcgePvX01rl6q_YhugdEieW2bMxG_RM0iUd2RKDlaRPvR9yJguEBt6owoj36vZk36GVvYCbDEq-6TBI3wg34P6WxFVWkjG0sjycdjyy-9pYRTmMrnpc7omuUht" />
        {props.message}
        <div className={classes.like}>{props.liked} likes</div>
      </div>
    )
}

export default Post;