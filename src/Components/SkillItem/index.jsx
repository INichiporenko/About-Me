import React from 'react'
import s from './style.module.css'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function SkillItem({url, title, score}) {

    const getStars = (score) => {
        const fillStars = [...new Array(score)].map(_ => <FaStar /> )
        const emptyStars = [...new Array(5 - score)].map(_ => <FaRegStar />)
        return [...fillStars, ...emptyStars]
    }

  return (
    <div className={s.item}>
        <img className={s.img} src={url} alt={title} />
        <p>{title}</p>
        <div className={s.stars}>{getStars(score)}</div>
    </div>
  )
}
