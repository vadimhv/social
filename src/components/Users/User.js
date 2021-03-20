import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/user_moc.png";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <div className={classes.user_wrapper}>
                <div className={classes.follow}>
                    <div className={classes.img}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      className={classes.btn} onClick={() => {
                                unfollow(user.id);
                            }}>UNFOLLOW</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      className={classes.btn} onClick={() => {
                                follow(user.id);
                            }}>FOLLOW</button>}
                    </div>
                </div>
                <div className={classes.info_wrapper}>
                    <div>
                        <div className={classes.name}>
                            {user.name}
                        </div>
                        <div className={classes.desc}>
                            {user.status}
                        </div>
                    </div>
                    {/*<div>*/}
                    {/*    <div className={classes.location}>*/}
                    {/*        {"user.location.country"},*/}
                    {/*    </div>*/}
                    {/*    <div className={classes.location}>*/}
                    {/*        {"user.location.city"}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default User;