import React from 'react';
import styles from './Skills.module.css';

import tmpimg from '../../assets/images/github.png';


export function Skills(){
    return (
        <div className={styles.Skills}>
            <h1>ON SKILLS</h1>
        </div>
    );
}

function MySkills(){
    let skills = [
        {
            Name: 'Python',
            Image: 'Python Image'
        },
        {
            Name: 'C',
            Image: 'C Image'
        },
        {
            Name: 'C++',
            Image: 'C++ Image'
        },
        {
            Name: 'Java',
            Image: 'Python Image'
        },
        {
            Name: 'HTML',
            Image: 'HTML Image'
        },
        {
            Name: 'CSS',
            Image: 'CSS Image'
        },
        {
            Name: 'Javascript',
            Image: 'Python Image'
        },
        {
            Name: 'React',
            Image: 'React Image'
        },
        {
            Name: 'Flutter',
            Image: 'Flutter Image'
        },
        {
            Name: 'SQL',
            Image: 'SQL Image'
        },
        {
            Name: 'Arduino',
            Image: 'Arduino Image'
        },
        {
            Name: 'Flask',
            Image: 'Flask Image'
        },
        
        // Machine Learning and Neural Network Architectures


        // Applied Math
    ]
    return(
        <h1>RAAHHHHHH</h1>
    );
}

function Skill({display}){
    return (
        <div className={display.skill}>
            <img href={tmpimg} alt='skillnamehere' />
            <p className={display.skillName}>{display.skillName}</p>
        </div>
    );
}