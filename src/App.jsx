// import './App.css'
// import { useState, useEffect } from 'react'
// import {useDispatch} from 'react-redux'
// import {login, logout } from './store/authSlice'
// import authService from './appwrite/auth'
// import {Header} from './components'
// import { Footer } from './components'
// import {Outlet} from 'react-router-dom'

// function App() {
//   // console.log(process.env.REACT_APP_APPWRITE_URL); use when we create app using create-react-app

//   // console.log(import.meta.env.VITE_APPWRITE_URL); // as we have created our app using vite

//   const [loading, setLoading] = useState(true)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     authService.getCurrentUser()
//     .then((userData) => {
//       if(userData) {
//         dispatch(login({userData}))
//       } else {
//         dispatch(logout())
//       }
//     })
//     .finally(() => setLoading(false))
//   }, [])

//   return !loading ? (
//     <div className='min-h-sv flex flex-wrap content-between bg-gray-400'>
//       <div className='w-full block'></div>
//       <Header />
//       <main>
//        TODO: <Outlet />
//       </main>
//       <Footer />
//       </div>
//   ) : null
// }

// export default App

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App

