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

// Needs editing; serves as a base for now
function oldProfile(){
    return (
        <div id="Profile" className={styles.profile}>
            <div className={styles.intro}>
                <h1 className={styles.profileName}>Ronan Buck</h1>
            </div>
            <div className={styles.body}>

            </div>
            <div className={styles.about}>

            </div>
            <div className={styles.profileContent}>
                <p className={styles.profileText}>
                    I am a Junior Computer Science major at the University of Central Florida. With a passion for machine learning, and artificial intelligence,
                    I am currently an undergraduate researcher with a focus on temporal graph neural networks. 
                </p>
                <img className={styles.profileImage} href='logo192.png' alt="picture/logo here"/>
            </div>
        </div>
    )
}


function Profile(){
    return (
        <div id="Profile" className={styles.profile}>
            <div className={styles.intro}>
                <h1 className={styles.profileName}>Hello! I am&nbsp;<span className={styles.Name}> Ronan Buck</span></h1>
            </div>
            <div className={styles.profileContent}>
                <div className={styles.body}>
                    I am a Junior Computer Science student attending the University of Central Florida
                </div>
                <div className={styles.aboutMe}>
                    Using my skills, I aim to apply machine learning to real world problems, preferably in the fields of robotics or cybersecurity. I am always seeking new opportunities to learn and would love to hear from you.
                </div>
            </div>
        </div>
    )
}