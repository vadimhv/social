import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, changePage, users, followingInProgress, unfollow, follow, ...props}) => {

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                       pageSize={pageSize} changePage={changePage} portionSize={10}/>
            {
                users.map(user => <div key={user.id}>
                        <User user={user} followingInProgress={followingInProgress} unfollow={unfollow}
                              follow={follow}/>
                    </div>
                )
            }
        </div>
    )
}

export default Users;