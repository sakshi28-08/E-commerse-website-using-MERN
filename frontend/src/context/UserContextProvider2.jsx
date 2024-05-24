import React, { useState } from 'react'
import UserContext from './UserContext'
import axios from 'axios'

export default function UserContextProvider2({children}) {
    let [cartList, setCartList] = useState('')
    let [auth, setAuth] = useState({
      token: localStorage.getItem('token') || null,
      isAuthenticated: !!localStorage.getItem('token'),
      user: ''
    })
    console.log(auth)

    async function login(username, password){
    let result =   await axios.post('http://localhost:3000/api/clientLogin', {username,password})
  setAuth({token: result.data.token, isAuthenticated: true, user:username})
    }
  return (
   <UserContext.Provider value={{cartList, setCartList, auth, login}}>
    {children}
   </UserContext.Provider>
  )
}