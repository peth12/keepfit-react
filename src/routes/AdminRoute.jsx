import React from 'react'
import {useSelector} from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect'

const AdminRoute = ({children}) => {
    const { user } = useSelector((state)=> ({...state}))

  return  user  && user.userRole == "admin" ? children : <LoadingToRedirect/>
   
}

export default AdminRoute