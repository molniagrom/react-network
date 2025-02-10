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

    getFollow(currentPage, pageSize) {
        return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

}
