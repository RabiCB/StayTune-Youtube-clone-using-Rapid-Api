
import React, { useState,useEffect } from 'react'
import"../App.css"
import {slide as Menu} from 'react-burger-menu'
const Sidebar = () => {

  return (

      <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/Coding">
        Coding
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      </Menu>
      
  )
}

export default Sidebar