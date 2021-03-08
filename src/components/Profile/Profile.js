import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './PofileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;