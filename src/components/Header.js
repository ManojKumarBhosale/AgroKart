import React from 'react'
import { FaUserPlus } from "react-icons/fa"
import { IoMdRefresh } from "react-icons/io"


const Header = ({companyName}) =>{
  return(
    <header> 
      <span className="logo"> {companyName} </span> 
      <span className="icons-container">
        <IoMdRefresh className="icon" />
        <FaUserPlus className="icon" />
      </span> 
    </header>
  )
}
export default Header