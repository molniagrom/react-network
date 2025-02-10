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

    getFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data.resultCode);
    },

    getUnFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data.resultCode);
    },

    getAuthMe(){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(response => response.data);
    },

    getUserIDForProfile(userID) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => response.data);
    }
}
