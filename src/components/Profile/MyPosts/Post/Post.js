import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
      <div className={classes.item}>
        <img src="https://lh3.googleusercontent.com/proxy/ApPNj-IVi_BRmy-8ySPZ23EHoNESythCiLBbwGiFbG262anMZVE_hVMMV99_J1f6Hy25-ktMXHQXeZ07xmytXJqB5NP3GDc2pW4riJgQxvaAE6sQ3TKgh2Us" />
        {props.message}
        <div className={classes.like}>{props.liked} likes</div>
      </div>
    )
}

export default Post;