import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/user_moc.png";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize );
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>

            {
                props.users.map( user =>  <div key={user.id}>
                        <div className={classes.user_wrapper}>
                            <div className={classes.follow}>
                                <div className={classes.img}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                                </div>
                                <div>
                                    {user.followed ? <button className={classes.btn} onClick={() => props.unfollow(user.id)}>UNFOLLOW</button> : <button className={classes.btn} onClick={() => props.follow(user.id)}>FOLLOW</button>}
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
            <div className={classes.pageNumberBlock}>
                {
                    pages.map(p => {
                        return <span onClick={() => {props.changePage(p)}} className={props.currentPage === p && classes.selectedPage}>{p}</span>
                    })
                }
            </div>
        </div>
    )
}

export default Users;