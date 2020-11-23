import * as axios from 'axios';
import Cookies from 'js-cookie'


const instance = axios.create({
    baseURL: `https://qpsy.herokuapp.com/`,
});
instance.interceptors.request.use(req => {
    if (Cookies.get('access')) {
        req.headers['Authorization'] = `JWT ${Cookies.get('access')}`;
        req.headers['Content-Type'] = 'application/json';
        req.headers['Accept'] = 'application/json';
        return req;
    }
    else {
        req.headers['Content-Type'] = 'application/json';
        req.headers['Accept'] = 'application/json';
        return req;
    }
});
export const authAPI = {

    login(email, password) {
        const body = JSON.stringify({ email, password });
        return instance.post(`api/auth/jwt/create`, body).then(response => {
            return response.data;
        })

    },
    loadUser() {
        return instance.get(`api/auth/users/me`).then(response => {
            return response.data;
        })
    },
    resetPassword (email) {
        const body = JSON.stringify({ email }); 
        return instance.post(`api/auth/users/reset_password/`, body).then(response => {
            return response.data;
        })    
    },

    confirmPassword(uid, token, new_password) {

        const body = JSON.stringify({ uid, token, new_password }); 

        return instance.post(`api/auth/users/reset_password_confirm/`, body).then(response => {
            return response.data;
        })
    },

    updateEmail(email) {
        const body = JSON.stringify({ email });
        return instance.post(`api/v1/users/update-email`, body).then(response => {
            return response;
        }) 
    },
    updateStatus() {
        return instance.post(`api/v1/users/update-status`).then(response => {
            return response;
        })
    }
}
export const chatAPI = {
    getChats() {
        return instance.get(`api/v1/chat/chats`).then(response => {
            return response.data;
        })
    },
    getUserMessages(chatID) {
        return instance.get(`api/v1/chat/messages?clientID=${chatID}`).then(response => {
            return response.data;
        })
    },
    sendMessage(clientID, text) {
        const body = JSON.stringify({ clientID, text });
        return instance.post(`api/v1/chat/send-message`, body).then(response => {
            return response;
        })
    }
}

export const tapeAPI = {
    getTapes() {
        return instance.get(`api/v1/news/list`).then(response => {
            return response.data;
        })
    }
}