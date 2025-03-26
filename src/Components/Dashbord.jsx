import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom';
import style from "./Css/Dashbord.module.css"

function Dashbord() {
  return (
    <>
        <NavBar/>

        <section className={style.Body}>
            <Outlet />
        </section>

        <footer className={style.footer}>-- Footer --</footer>
      
    </>
  )
}

Dashbord.propTypes = {}

export default Dashbord
