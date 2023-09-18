import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider } from "react-router-dom"
import { Login } from './views/Login/Login.jsx'
import SignUp from './views/SignUp/SignUp.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: (
      <App/>
    )
  },
  {
    path:"/SignUp",
    element: (
      <SignUp/>
    )
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
