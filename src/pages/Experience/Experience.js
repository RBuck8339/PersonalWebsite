import React from 'react';
import {useSearchParams} from 'react-router-dom';
import styles from './Experience.module.css';
import {Experience, Education, Publication, Position} from '../../components/Cards/Cards';
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
        
    let grouped_positions = groupItems(positions, 2);

    return (
        <div className={styles.positionCards}>
            {grouped_positions.map((group, rowIndex) => (
                <div key={rowIndex} className={styles.positionRow}>
                    {group.map((details, index) => (
                        <Position key={index} id = {details.id} details={details} />
                    ))}
                </div>
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

    let grouped_educations = groupItems(education, 2);

    return (
        <div className={styles.educationCards}>
            {grouped_educations.map((group, rowIndex) => (
                <div key={rowIndex} className={styles.educationRow}>
                    {group.map((details, index) => (
                        <Education key={index} id = {details.id} details={details} />
                    ))}
                </div>
            ))}
        </div>
    );
}


function Organizations(){
    let organization = [

    ]

    let grouped_organizations = groupItems(organization, 3);

}

export function Experiences(){
    return (
        <div className={styles.Experiences}>
            <div className={styles.Educations}>
                <Educations />
            </div>
            <div className={styles.Positions}>
                <Positions />
            </div>
        </div>
    );
}

// Build rows by slicing the data into smaller rows
function groupItems(data, itemsPerRow){
    let items = [];
    for(let i = 0; i < data.length; i += itemsPerRow){
        items.push(data.slice(i, i + itemsPerRow));
    }

    return items;
}