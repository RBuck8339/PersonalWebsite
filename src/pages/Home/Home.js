import React from 'react';
import {Portfolio} from '../Portfolio/Portfolio';
import {Skills} from '../Skills/Skills';
import styles from './Home.module.css';


export function Home(){
    return (
        <div className={styles.homePage}>
            <div className={styles.about}>
                <Profile />
            </div>
            <div className={styles.portfolio}>
                <Portfolio />
            </div>
            <div className={styles.skills}>
                <h1 className={styles.header}>My Skills</h1>
                <Skills />
            </div>
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
