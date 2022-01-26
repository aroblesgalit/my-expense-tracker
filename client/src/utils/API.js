import axios from 'axios'

const API = {
  // User
  signupUser: function (data) {
    return axios.post('/api/user/signup', data)
  },
  loginUser: function (data) {
    return axios.post('/api/user/login', data)
  },
  logoutUser: function () {
    return axios.get('/api/user/logout')
  },
  getUserData: function () {
    return axios.get('/api/user/user_data')
  },
  // Expenses
  addExpense: function (data) {
    return axios.post('/api/expenses', data)
  },
  getAllExpenses: function (user) {
    return axios.get('/api/expenses/' + user)
  },
  updateExpense: function (id, data) {
    return axios.put('/api/expenses/' + id, data)
  },
  deleteExpense: function (id) {
    return axios.delete('/api/expenses/' + id)
  },
  // Income
  addIncome: function (data) {
    return axios.post('/api/income', data)
  },
  getAllIncome: function (user) {
    return axios.get('/api/income/' + user)
  },
  deleteIncome: function (id) {
    return axios.get('/api/income/' + id)
  }
}

export default API
