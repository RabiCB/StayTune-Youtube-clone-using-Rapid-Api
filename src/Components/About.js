import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../AuthContext/AuthProvider'

const About = () => {
  const {loggedcurrentUser,logout}=UserAuth()
  return (
    <div className="flex border-2 h-screen justify-center ">
        <div className="border-2 rounded-md  h-72 w-80 flex items-center gap-2  justify-center flex-col  pt-4  mt-16">
        <ul className="flex justify-center items-center gap-2 flex-col">
        <Avatar src={`${loggedcurrentUser.photoURL===null?"https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg?w=2000":loggedcurrentUser.photoURL}`}/>
        <p className='text-xs font-semibold'>{loggedcurrentUser.displayName?loggedcurrentUser.displayName:"user07"}</p>
        <span>{loggedcurrentUser.email}</span>
        <button onClick={logout}>logout</button>
        </ul>
        </div>
    
        
    </div>
  )
}

export default About