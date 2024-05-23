import React from 'react'

import { Outlet } from 'react-router-dom'
import UserContextProvider2 from './context/UserContextProvider2'
import Navbar from './components/Navbar'

export default function ClientApp() {
  return (
   <UserContextProvider2>
     <Navbar/>
     <Outlet/>
   </UserContextProvider2>

  )
}
