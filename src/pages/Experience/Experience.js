import React from 'react';
import styles from './Experience.module.css';
import {Education, Position} from '../../components/Cards/Cards';
import fgcu_img from '../../assets/images/portfolio/schools/fgcu_logo.png';
import ucf_img from '../../assets/images/portfolio/schools/ucf_logo.png';


function GetPositions(){
    let positions = [
        // Research
        {
            Name: 'Undergraduate Researcher',
            Location: 'Future Data Lab',
            Dates: 'March 2024 - Present',
            StartDate: '03-01-2024', // Init to first of month for sorting
            Responsibilities: [
                'Currently writing a survey paper on the development, applications, and future of temporal graph neural networks', 
                'Employ network-based methods on real-world Ethereum and Blockchain datasets using Python libraries such as Networkx and PyTorch', 
                'Develop graph embedding methods for continuous-time predictions'
                ],
            Skills: ['Python', 'Graph Neural Networks', 'Recurrent Neural Networks', 'Topological Data Analysis', 'Graphs'],
            Type: 'Position'
        },
        // Teaching Assistant
        {
            Name: 'Teaching Assistant',
            Location: 'University of Central Florida',
            Dates: 'August 2024 - December 2024',
            StartDate: '08-01-2024', // Init to first of month for sorting
            Responsibilities: [
                    'Assisted 60 Masters in Fintech students in the course Computational Methods in Fintech',
                    'Taught students basic python programming, data science, and machine learning techniques to assist them in their careers'
                ],
            Skills: ['Python', 'Teaching', 'Machine Learning'],
            Type: 'Position'
        }
    ]
        
    return positions;
}


function GetEducations(){
    let education = [
        // UCF
        {
            School: 'University of Central Florida',
            Img: <img className={styles.logo} src={ucf_img} alt="UCF_Logo"/>,
            Major: 'Computer Science',
            Minor: 'Intelligent Robotics Systems',
            GPA: '3.95 ',
            Dates: 'August 2023 - May 2026',
            Location: 'Orlando, Florida',
            StartDate: '08-01-2023',   // Init to first of month for sorting
            Organizations: ['Burnett Honors College', 'Knight\'s Experimental Rocketry', 'Knight Hack\'s', 'IEEE'],
            Coursework: ['Computer Science I', 'Computer Science II', 'Algorithms for Machine Learning', 'Principles of Object Oriented Software Development', 'Discrete Structures', 'AI for Game Development'],
            id: 'UCF',
            Type: 'Education'
        },
        // FGCU
        {
            School: 'Florida Gulf Coast University',
            Img: <img className={styles.logo} src={fgcu_img} alt="FGCU_Logo"/>,
            Major: 'Software Engineering',
            Minor: 'Mathematics',
            GPA: '3.97',
            Dates: 'August 2021 - May 2023',
            Location: 'Fort Myers, Florida',
            StartDate: '08-01-2021',  // Init to first of month for sorting
            Organizations: ['Accelerated Collegiate Academy'],
            Coursework: ['Discrete Mathematics', 'Programming I (C++)', 'Programming II (C++)'],
            id: 'FGCU',
            Type: 'Education'
        }
    ]

    return education;
}


function MappedExperiences(){
    // Get necessary objects
    let educations = GetEducations();
    let positions = GetPositions();
    let experiences = educations.concat(positions);

    experiences.sort((a, b) => new Date(b.StartDate) - new Date(a.StartDate));  // Sort

    return (
        <div className={styles.Timeline}>
            {experiences.map((details, idx) => (
                <div key={details.id} className={styles.TimelineItem}>
                    <div className={styles.TimelineDot}></div>
                    {idx !== experiences.length - 1 && (
                        <div className={styles.TimelineLine}></div>
                    )}
                    <div className={styles.TimelineContent}>
                        {details.Type === 'Position' ? (
                            <Position id={details.id} details={details} />
                        ) : details.Type === 'Education' ? (
                            <Education id={details.id} details={details} />
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    );
}

export function Experiences(){
    return (
        <div className={styles.Experiences}>
            <div className={styles.introText}>
                <h1 className={styles.header}>My Experience</h1>
                <p>As a student, I have made sure to keep pursuing new opportunities that allow me to grow as an academic, developer, and person. Below are my experiences to date that reflect my growth.</p>
            </div>
            <MappedExperiences />
        </div>
    );
}
