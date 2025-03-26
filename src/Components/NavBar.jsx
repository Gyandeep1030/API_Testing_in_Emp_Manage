import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Css/NavBar.module.css"


function NavBar() {
  return (
    <div className={style.MainNav}>
      <img src="" alt="LOGO" />
      <nav className={style.NavBarLinks}>
        <NavLink className={style.NavLink} to="/ViewEmp">ViewEmp</NavLink>
        <NavLink className={style.NavLink} to="/CreatEmp">CreatEmp</NavLink>
      </nav>
    </div>
  )
}

export default NavBar