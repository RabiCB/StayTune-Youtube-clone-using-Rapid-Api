import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from './AuthProvider'
const ProtectRoute = ({children}) => {
    const {loggedcurrentUser}=UserAuth();
    if(!loggedcurrentUser){
        return <Navigate to="/login"/>
    }
  return children



}

export default ProtectRoute