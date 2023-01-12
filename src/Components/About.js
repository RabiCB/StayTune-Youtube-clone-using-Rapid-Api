import { Avatar } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div className="flex border-2 h-screen justify-center ">
        <div className="border-2 rounded-md  h-72 w-80 flex items-center gap-2 flex-col  pt-4  mt-16">
        <ul className="flex justify-center gap-2 flex-col">
        <Avatar/>
        <p className='text-xs font-semibold'>name</p>
        <span>email</span>
        <span>logout</span>
        </ul>
        <div></div>
        </div>
    
        
    </div>
  )
}

export default About