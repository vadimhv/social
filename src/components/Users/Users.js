import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/user_moc.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from '../../API/api'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize );
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={classes.pageNumberBlock}>
                {
                    pages.map(p => {
                        return <span onClick={() => {props.changePage(p)}} className={props.currentPage === p && classes.selectedPage}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map( user =>  <div key={user.id}>
                        <div className={classes.user_wrapper}>
                            <div className={classes.follow}>
                                <div className={classes.img}>
                                    <NavLink to={'/profile/' + user.id}>
                                        <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {user.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === user.id)} className={classes.btn} onClick={() =>{props.unfollow(user.id);}}>UNFOLLOW</button>
                                        : <button disabled={props.followingInProgress.some(id => id === user.id)} className={classes.btn} onClick={() =>{props.follow(user.id);}}>FOLLOW</button>}
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
                                <div>
                                    <div className={classes.location}>
                                        {"user.location.country"},
                                    </div>
                                    <div className={classes.location}>
                                        {"user.location.city"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Users;