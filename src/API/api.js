import * as axios from "axios";
import {setUserProfile} from "../redux/profile-reducer";
import {setAuthUserData} from "../redux/auth-reducer";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '8f85b81e-8ee5-4ccb-9e25-0f1767643309'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

   follow(id) {
        return instance.post(`follow/${id}`);
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`, {});
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
