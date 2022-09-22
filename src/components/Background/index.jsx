import React from 'react'
import style from "./background.module.scss"

const Background = ( {children} ) => {
  return (
    <div className={style.backgroundContainer}>
      {children}
    </div>
  )
}

export default Background