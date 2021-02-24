import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './PofileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo />
            <MyPosts postsData={props.stateProfile.posts} newPostText={props.stateProfile.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;