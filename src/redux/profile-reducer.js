import {profileAPI, usersAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'samurai-network/profile/ADD-POST';
const SET_USER_PROFILE = 'samurai-network/profile/SET_USER_PROFILE';
const SET_STATUS = 'samurai-network/profile/SET_STATUS';
const DELETE_POST = 'samurai-network/profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'samurai-network/profile/SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'samurai-network/profile/SAVE_PROFILE_SUCCESS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 30},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action, error) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: action.newPostBody,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        case SAVE_PROFILE_SUCCESS:
            return {
                ...state
            }
        default: return state;
    }
}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST,newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const saveProfileSuccess = (profile) => ({type: SAVE_PROFILE_SUCCESS, profile});


export const setProfile = (userId) => async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
        const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
        const response = await profileAPI.updateStatus(status);
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}
export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);

    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profileData) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profileData);
    if(response.data.resultCode === 0) {
        dispatch(setProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;