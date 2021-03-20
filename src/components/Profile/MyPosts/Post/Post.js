import React from 'react';
import classes from './Post.module.css';
import profileImg from '../../../../assets/img/user_moc.png'

const Post = (props) => {
    return (
      <div className={classes.item}>
        <img src={profileImg} />
        {props.message}
      </div>
    )
}

export default Post;