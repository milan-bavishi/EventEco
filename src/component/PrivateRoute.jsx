import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { login } from '../services/operation/authApi';

const PrivateRoute = ({children}) => {

    const {token} = useSelector((state) => state.auth);

    if(login)
        return children
    else
        return <Navigate to="/login" />
  
}

export default PrivateRoute