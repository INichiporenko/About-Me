import React from 'react'
import s from './style.module.css';

export default function Subheder({children}) {
  return (
    <p className={s.subheder}>
        {children}
    </p>
  )
}
