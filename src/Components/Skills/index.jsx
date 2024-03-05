import React from 'react'
import Conteiner from '../../UI/Conteiner';
import SkillItem from '../SkillItem';
import s from './style.module.css'


export default function Skills() {
    const skills = [
        {id: 1, title: 'HTML5', url: '/images/html.png', score: 4},
        {id: 2, title: 'CSS3', url: '/images/css.png', score: 4},
        {id: 3, title: 'JavaScript', url: '/images/js.png', score: 4},
        {id: 4, title: 'React', url: '/images/react.png', score: 4},
    ];

    return (
        <Conteiner>
        <div className={s.conteiner} id='skills'>
            <div className={s.text}>
                <h2>Skills</h2>
                <p>I work in such technologies as</p>
            </div>
            <div className={s.skills}>
                {
                    skills.map(skill => <SkillItem key={skill.id} {...skill} />)
                }
            </div>
        </div>
        </Conteiner>
    )
}






