import React from 'react';
import styles from './Experience.module.css';
import {Education, Position} from '../../components/Cards/Cards';
import fgcu_img from '../../assets/images/portfolio/schools/fgcu_logo.png';
import ucf_img from '../../assets/images/portfolio/schools/ucf_logo.png';


function Positions(){
    let positions = [
        // Research
        {
            Name: 'Undergraduate Researcher',
            Location: 'Future Data Lab',
            Date: 'March 2024 - Present',
            Description:
                <div className={styles.positionDescription}>
                    <ul>
                        <li>Currently writing a survey paper on the development, applications, and future of temporal graph neural networks</li>
                        <li>Employ network-based methods on real-world Ethereum and Blockchain datasets using Python libraries such as Networkx and PyTorch</li>
                        <li>Develop graph embedding methods for continuous-time predictions</li>
                    </ul>
                </div>,
            Skills: ''
        },
        // Teaching Assistant
        {
            Name: 'Teaching Assistant',
            Location: 'University of Central Florida',
            Date: 'August 2024 - Present',
            Description: 
                <div className={styles.positionDescription}>
                    <ul>
                        <li>Assisted 60 Masters in Fintech students in the course Computational Methods in Fintech</li>
                        <li>Taught students basic python programming, data science, and machine learning techniques to assist them in their careers</li>
                    </ul>
                </div>,
            Skills: ''
        }
    ]
        

    return (
        <div className={styles.positionCards}>
            {positions.map((details) => (
                <Position id = {details.id} details={details} />
            ))}
        </div>
    );
}

function Educations(){
    let education = [
        // UCF
        {
            School: 'University of Central Florida',
            Img: <img className={styles.logo} src={ucf_img} alt="UCF_Logo"/>,
            Major: 'Computer Science',
            Minor: 'Intelligent Robotics Systems',
            GPA: '3.95 ',
            Dates: 'August 2023 - May 2026',
            Organizations: ['Burnett Honors College', 'Knight\'s Experimental Rocketry', 'Knight Hack\'s', 'IEEE'],
            Coursework: ['Computer Science I', 'Computer Science II', 'Algorithms for Machine Learning', 'Principles of Object Oriented Software Development', 'Discrete Structures', 'AI for Game Development'],
            id: 'UCF'
        },
        // FGCU
        {
            School: 'Florida Gulf Coast University',
            Img: <img className={styles.logo} src={fgcu_img} alt="FGCU_Logo"/>,
            Major: 'Software Engineering',
            Minor: 'Mathematics',
            GPA: '3.97',
            Dates: 'August 2021 - May 2023',
            Organizations: ['Accelerated Collegiate Academy'],
            Coursework: ['Discrete Mathematics', 'Programming I (C++)', 'Programming II (C++)'],
            id: 'FGCU'
        }
    ]

    return (
        <div className={styles.educationCards}>
            {education.map((details) => (
                <Education id = {details.id} details={details} />
            ))}
        </div>
    );
}


function Organizations(){
    let organization = [

    ]

}

export function Experiences(){
    return (
        <div className={styles.Experiences}>
            <div className={styles.introText}>
                <h1>My Experience</h1>
                <p>As a student, I have made sure to keep pursuing new opportunities that allow me to grow as an academic, developer, and person. Below are my experiences to date that reflect my growth.</p>
            </div>
            <div className={styles.Positions}>
                <h1 className={styles.header}>My Positions</h1>
                <Positions />
            </div>
            <div className={styles.Educations}>
                <h1 className={styles.header}>My Education</h1>
                <Educations />
            </div>
        </div>
    );
}
