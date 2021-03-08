import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
      <div className={classes.item}>
        <img src='' />
        {props.message}
        <div className={classes.like}>{props.liked} likes</div>
      </div>
    )
}

export default Post;