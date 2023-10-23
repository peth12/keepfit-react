import React from 'react'
import { Navbar } from './Navbar'

export const Layout = ({children}) => {
  return (
    <>
    <div className="h-screen">

    <Navbar /> 
    <div className="h-[80vh]">

    {children}
    </div>
    </div>
    </>
  )
}
