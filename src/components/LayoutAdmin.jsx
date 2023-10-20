import React from 'react'
import { NavbarAdmin } from './NavbarAdmin'

export const LayoutAdmin = ({children}) => {
  return (
    <>
    <NavbarAdmin /> 
    {children}
    </>
  )
}
