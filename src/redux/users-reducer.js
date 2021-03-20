import {usersAPI} from "../API/api";

const FOLLOW = 'samurai-network/users/FOLLOW';
const UNFOLLOW = 'samurai-network/users/UNFOLLOW';
const SET_USERS = 'samurai-network/users/SET_USERS';
const SET_CURRENT_PAGE = 'samurai-network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'samurai-network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'samurai-network/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'samurai-network/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
       case FOLLOW:
           return {
               ...state,
               users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                }), //[...state.users] - same
           }
       case UNFOLLOW:
           return {
               ...state,
               users: state.users.map(user => {
                   if(user.id === action.userId) {
                       return {...user, followed: false}
                   }
                   return user
               }), //[...state.users] - same
           }
       case SET_USERS: {
           return { ...state, users: action.users}
       }
       case SET_CURRENT_PAGE:
           return {...state, currentPage: action.currentPage};
       case SET_TOTAL_USERS_COUNT:
           return {...state, totalUsersCount: action.count};
       case TOGGLE_IS_FETCHING:
           return {...state, isFetching: action.isFetching}
       case TOGGLE_IS_FOLLOWING_PROGRESS:
           return {
               ...state,
               followingInProgress: action.isFetching
                   ? [...state.followingInProgress, action.userId]
                   : state.followingInProgress.filter(id => id !== action.userId)
           }
       default: return state;
   }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, id));
    const response = await apiMethod(id)
    if(response.data.resultCode === 0) {
        dispatch(actionCreator(id));
    }
    dispatch(toggleFollowingProgress(false, id));
}
export const follow = (id) => async (dispatch) => {
        followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), followSuccess);
}
export const unfollow = (id) => async (dispatch) => {
        followUnfollowFlow(dispatch, id, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
}

export default usersReducer;