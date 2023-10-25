import React from 'react'
import {useSelector} from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect'

const UserRoute = ({children}) => {

    const { user } = useSelector((state)=> ({...state}))

  return  user && user.userRole == "user" ? children : <LoadingToRedirect/>
  
}

export default UserRoute