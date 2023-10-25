import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { useDispatch } from 'react-redux';
import { currentUser } from '../function/auth';

export const Layout = ({children}) => {
  const idToken = localStorage.token;
  const dispatch = useDispatch();

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
