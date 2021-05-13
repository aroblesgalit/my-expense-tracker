import axios from 'axios';

export default {
    // User
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
    },
    // Expenses
    addExpense: function (data) {
        return axios.post('/api/expenses', data);
    },
    getAllExpenses: function () {
        return axios.get('/api/expenses');
    },
    updateExpense: function (id, data) {
        return axios.put('/api/expenses/' + id, data);
    },
    deleteExpense: function (id) {
        return axios.delete('/api/expenses/' + id);
    }
}