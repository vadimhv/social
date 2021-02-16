import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
      <div className={classes.profile}>
      <div>
          ava + desc
      </div>
      <MyPosts />
  </div>
    )
}

export default Profile;