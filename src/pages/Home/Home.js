import React from 'react';
import styles from './Home.module.css';
import SocialButtons from '../../components/Navigation/Navigation';


export function Home(){
    return (
        <div className={styles.homePage}>
            <div className={styles.about}>
                <Profile />
            </div>
            <SocialButtons />
        </div>
        
    )
}

// Needs editing; serves as a base for now
function Profile(){
    return (
        <div id="Profile" className={styles.profile}>
            <h1 className={styles.profileName}>Ronan Buck</h1>
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
