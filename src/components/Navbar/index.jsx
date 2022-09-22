import React from 'react'
import style from "./navbar.module.scss"

const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <div className={style.logo}>H&D</div>
      <div className={style.buttons}>
        <ul>
          <li>Inicio</li>
          <li>Contato</li>
          <li>Catalógo</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar