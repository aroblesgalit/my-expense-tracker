import axios from 'axios';

export default {
    signupUser: function (data) {
        return axios.post('/api/user/signup', data);
    },
    loginUser: function (data) {
        return axios.post('/api/user/login', data);
    },
    logoutUser: function () {
        return axios.get('/api/user/logout');
    },
    getUserData: function () {
        return axios.get('/api/user/user_data');
    }
}