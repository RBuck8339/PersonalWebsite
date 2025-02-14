import React from 'react';
import styles from './Home.module.css';
import SocialButtons from '../../components/Navigation/Navigation';


export function Home(){
    return (
        <div className={styles.homePage}>
            <Profile />
            <SocialButtons />
        </div>
        
    )
}


function Profile(){
    return (
        <div id="Profile" className={styles.profile}>
            <div className={styles.intro}>
                {/*Later, change the "Software Developer" to be rotating text of my titles, "Researcher", etc. */}
                <h1 className={styles.profileName}>Hi! I am&nbsp;<span className={styles.Name}> Ronan Buck</span>, a Software Developer</h1>
            </div>
            <div className={styles.profileContent}>
                <div className={styles.body}>
                    I am a Junior Computer Science student attending the University of Central Florida, driven by a passion for solving real-world problems through technology. 
                    My dedication to innovation has led me to become an Undergraduate Researcher, where I explore and develop Graph Neural Networks for Ethereum datasets. 
                    I thrive in collaborative environments and enjoy contributing to impactful projects involving robotics and cybersecurity.
                </div>
                <div className={styles.aboutMe}>
                    Using my skills, I aim to apply machine learning to challenges that can make a meaningful difference in the world. 
                    I am eager to learn and grow with every project I undertake, constantly seeking opportunities to grow as a developer. 
                    Feel free to reach out for collaboration or to discuss any new opportunities. I would love to hear from you!
                </div>
            </div>
        </div>
    )
}