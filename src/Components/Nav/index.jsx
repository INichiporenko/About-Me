import React, { useState } from 'react'
import Conteiner from '../../UI/Conteiner';
import s from './style.module.css'
import { FaBars } from "react-icons/fa6";

export default function Nav() {

  const [active, setActive] = useState(false);

  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   section.scrollIntoView({ behavior: 'smooth' });
  //   setActive(false);
  // };

  return (
    <Conteiner className={s.conteiner}>
      <nav 
        onClick={() => setActive(false)}
        className={[s.nav, active ? s.active: ''].join(' ')}>
          <a href='#home'>Home</a>
          <a href='#about_me' >About me</a>
          <a href='#skills' >Skills</a>
          <a href='#portfolio' >Portfolio</a>
          <a href='#contacts' >Contacts</a> 
      </nav>
      <button 
        className={s.navBtn} 
        onClick={() => setActive(!active)}>
        <FaBars />
      </button>
    </Conteiner>
  )
}



