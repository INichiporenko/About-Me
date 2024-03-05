import React from 'react'
import s from './style.module.css'
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import Conteiner from '../../UI/Conteiner';

export default function Contacts() {

    const openWhatsApp = () => {
        window.location.href = 'https://wa.me/+4917684261884'; 
      };

  return (
    <div className={s.conteiner} id='contacts'>
        <Conteiner>
        <div className={s.contacts}>
            <div className={s.text}>
                <h2>Contacts</h2>
                <p className="white-space: nowrap;">Want to know more or just chat? <br />
                    You are welcome!</p>
            </div>
            <div className={s.send}>
                <button className={s.btn} onClick={openWhatsApp}>Send message</button>
            </div>
            <div className={s.icon}>
                <a href='https://www.linkedin.com/in/ірина-нихипоренко-8510072a0/'>
                    <FaLinkedin />
                </a>
                <a href='mailto:i.v.nichiporenko25@gmail.com'>
                    <ImMail />
                </a>
                <a href='https://t.me/irish_nichiporenko'>
                    <FaTelegram />
                </a>
                <a href='https://github.com/INichiporenko'>
                    <FaGithub />
                </a>
            </div>
            <div className={s.tex}>
                <p>Like me on</p>
                <p>LinkedIn, GMail, WhatsApp, Telegram, GitHub</p>
            </div>
        </div>
        </Conteiner> 
    </div>
  )
}
