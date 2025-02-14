import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "30db831e-a1bb-4972-92d9-f204c02ccc87",
    }
})

export const usersAPi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data.resultCode);
    },

    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data.resultCode);
    },

    getUserIDForProfile(userID) {
        return instance.get(`profile/${userID}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    getMe(){
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
}