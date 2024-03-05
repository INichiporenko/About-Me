import React from 'react'
import Conteiner from '../../UI/Conteiner'
import s from './style.module.css'

export default function AboutMe() {
  return (
    <div className={s.conteiner} id='about_me'>
    <Conteiner>
      <div className={s.info}>
          <h2>About Me</h2>
          <p className="white-space: nowrap;">
            Hi, I'm Iryna - Front-End Developer from Ukraine <br />
          I'm interested in development and everything connected with it. 
          </p>
          <p>Ready to implement excellent projects with wonderful people.</p>
        </div>
    </Conteiner>
    </div>
  )
}
