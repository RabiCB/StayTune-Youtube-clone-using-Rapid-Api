import React from 'react'
import { BsSearch } from "react-icons/bs";
import { Avatar } from "@mui/material";
import Sidebar from "./Sidebar.js";
import "../App.css"

const Navbar = () => {
  
  return (
    <div className="navbar flex pl-6 pr-6 items-center h-16  justify-between bg-gray-400">
        <div className="flex items-center justify-center">
          <Sidebar />
          <h2 className="pl-20 max-sm:pl-8">StayTune</h2>
        </div>
        <div className="flex rounded-sm bg-white items-center border-2">
          <input
            type="text"
            className="pl-4 max-md:w-40"
            placeholder="search.."
          />
          <BsSearch className="Search w-10 " />
        </div>
      </div>
  )
}

export default Navbar