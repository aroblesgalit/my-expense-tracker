import React, { createRef, useEffect, useState } from 'react'
import API from './API'

const UserContext = React.createContext()

// Provider
function UserProvider (props) {
  const [user, setUser] = useState({
    isLoggedIn: null,
    userData: {}
  })

  function getUserData () {
    API.getUserData()
      .then(res => {
        setUser({
          ...user,
          isLoggedIn: true,
          userData: res.data
        })
      })
      .catch(() => {
        setUser({
          ...user,
          isLoggedIn: false,
          userData: {}
        })
      })
  }

  useEffect(() => {
    getUserData()
  }, [])

  /*********** Signup ***********/
  const signupUserRef = createRef()
  const signupPassRef = createRef()
  const signupConfirmdRef = createRef()

  const [signupAlert, setSignupAlert] = useState({
    type: null,
    copy: null
  })

  const handleSignup = e => {
    e.preventDefault()

    const username = signupUserRef.current.value
    const password = signupPassRef.current.value
    const confirmPassword = signupConfirmdRef.current.value

    username && password && confirmPassword
      ? password === confirmPassword
        ? API.signupUser({
            username,
            password
          })
            .then(res => {
              setSignupAlert({
                type: 'success',
                copy: 'Signup successful!'
              })
              return getUserData()
            })
            .catch(err => {
              setSignupAlert({
                type: 'fail',
                copy: 'Username is already taken.'
              })
            })
        : setSignupAlert({
            type: 'fail',
            copy: 'Password does not match.'
          })
      : setSignupAlert({
          type: 'fail',
          copy: 'Please fill in all the fields.'
        })
  }
  /*********** END Signup ***********/

  /*********** Login ***********/
  const loginUserRef = createRef()
  const loginPassRef = createRef()

  const [loginAlert, setLoginAlert] = useState({
    type: null,
    copy: null
  })

  const handleLogin = e => {
    e.preventDefault()

    const username = loginUserRef.current.value
    const password = loginPassRef.current.value

    username && password
      ? API.loginUser({
          username,
          password
        })
          .then(res => {
            setLoginAlert({
              type: 'success',
              copy: 'Login successful!'
            })
            getUserData()
          })
          .catch(err => {
            setLoginAlert({
              type: 'fail',
              copy: 'Wrong username or password.'
            })
          })
      : setLoginAlert({
          type: 'fail',
          copy: 'Please fill in all the fields.'
        })
  }
  /*********** END Login ***********/

  /*********** Logout ***********/
  const handleLogout = () => {
    API.logoutUser()
      .then(() => {
        getUserData()
      })
      .catch(err => console.log(err))
  }
  /*********** END Logout ***********/

  return (
    <UserContext.Provider
      value={{
        signupUserRef,
        signupPassRef,
        signupConfirmdRef,
        handleSignup,
        signupAlert,
        ...user,
        loginUserRef,
        loginPassRef,
        handleLogin,
        handleLogout,
        loginAlert
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

// Consumer
const UserConsumer = UserContext.Consumer

export default UserContext
export { UserProvider, UserConsumer }
