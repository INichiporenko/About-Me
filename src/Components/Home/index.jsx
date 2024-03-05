import React, { useState } from 'react'
import s from './style.module.css'
import Conteiner from '../../UI/Conteiner';

export default function Home() {

  const [language, setLanguare] = useState('END')

  return (
    <Conteiner>
    <div className={s.conteiner} id='home'>
        <div className={s.text}>
            <h1 className="white-space: nowrap;">Iryna <br/> Nychyporenko</h1>
            <h2 className="white-space: nowrap;">
              Front-End Developer <br /> 29 years old, Germany 
            </h2>
            <div className={s.language}>
              <span 
                onClick={() => setLanguare('ENG')}
                className={language == 'ENG' ? s.active : ''}
                >ENG
              </span> 
              <span>|</span>
              <span 
                onClick={() => setLanguare('DEU')}
                className={language == 'DEU' ? s.active : ''}
                >DEU
              </span>
            </div>
        </div>
        <div className={s.foto}>
        <img src='/images/foto3.JPG ' alt='foto' />
        </div>
    </div>
    </Conteiner>
  )
}
