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

    getProfile(userID) {
        return profileAPI.getProfile(userID)
    }
}
export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/${userID}`)
            .then(response => response.data);
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`)
            .then(response => response.data);
    },
    async upDateStatus(status) {
        try {
            const response = await instance.put(`profile/status`, {
                status: status
            })
            return response.data;
        } catch (error) {
            debugger
            console.error("Ошибка при обновлении статуса:", error);
            throw error;
            // todo: can dispatch an error

        }
    },
    savePhoto(photo) {
        let formData = new FormData();
        formData.append('image', photo);

        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => response.data);
    },
    saveProfileToAPI(profile) {
        return instance.put(`profile`, profile)
            .then(response => response.data);

    }
}

export const authAPI = {
    getMe() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    },

}

export const securityAPI = {
    getCaptchaURL() {
        return instance.get(`security/get-captcha-url`)
            .then(response => response.data);
    }
}













