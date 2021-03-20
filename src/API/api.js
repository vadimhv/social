import * as axios from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        // 'API-KEY': '2e532bb6-4c78-4216-a9cf-49c2b54294ef',
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
        console.warn('Use profileAPI object.');
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(file) {
        const formData = new FormData();
        formData.append('image', file)
        return instance.put(`profile/photo`, formData, {
           headers: {
               'Content-Type': 'multipart/form-data'
           }
        });
    },
    saveProfile(profileData) {
        return instance.put(`profile`, profileData);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}

