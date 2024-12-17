import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './Navigation.module.css';
import emailLogo from '../../assets/images/socials/email.png';
import githubLogo from '../../assets/images/socials/github.png';
import linkedinLogo from '../../assets/images/socials/linkedin.png';
import resumeLogo from '../../assets/images/socials/resume.png';


// Navigation Bar seen at all times in the program
export function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // Define parameters for each button to display
    const buttons = [
        // Home button
        {
            id: 'home_button',
            style: styles.button,
            href: '/', // Go to home page
            display: 'home'
        },
        {
            id: 'experience_button',
            style: styles.button,
            href: '/Experience',
            display: 'Experience'
        },
        {
            id: 'portfolio_button',
            style: styles.button,
            href: '/Portfolio', // Go to home page
            display: 'Portfolio'
        },
        {
            id: 'skills_button',
            style: styles.button,
            href: '/Skills',
            display: 'Skills'
        },
        // Pages dropdown button
        // { // Tmp unused
        //     id: 'pages_button',
        //     style: styles.button,
        //     onclick: () => setDropdownOpen(!dropdownOpen),
        //     display: 'pages'
        // },
        // Resume button
        {
            id: 'resume_button',
            style: styles.buttonSocial,
            display: <a href="/RonanBuck_Resume.pdf" target="_blank" rel="noopener noreferrer"><img src={resumeLogo} alt="Resume"/></a>
        },
        // GitHub button
        {
            id: 'github_button',
            style: styles.buttonSocial,
            onclick: () => { window.open("https://github.com/RBuck8339", "_blank"); }, // Go to github
            display: <img src={githubLogo} alt="GitHub"/>
        },
        // LinkedIn Button
        {
            id: 'linkedin_button',
            style: styles.buttonSocial,
            onclick: () => { window.open("https://www.linkedin.com/in/ronan-buck-79002b239/", "_blank"); }, // Go to linkedin
            display: <img src={linkedinLogo} alt="LinkedIn"/>
        },
        // Email button
        {
            id: 'email_button',
            style: styles.buttonSocial,
            href: "mailto:ronanwb2015@outlook.com?subject=Job%20Application&body=Hello%20Ronan,",  // Set up an email
            display: <img src={emailLogo} alt="Email"/>
        }
    ]

    return ( 
        <div className={styles.Navbar}>
            {buttons.map((info) => 
                <Button key={info.id} details={info} />
            )}
            {/*Make the dropdown div with its button*/}
            {/*dropdownOpen && (
                <DropDown 
                    options={{
                        Portfolio: "/Portfolio",
                        Skills: "/Skills",
                    }}
                />
            )*/}
        </div>
    );
}

// Button component
export function Button({ details }) {
    // If there's a `href` attribute, render as a link; otherwise, use a button
    return details.href ? (
        <a 
            id={details.id} 
            className={details.style} 
            href={details.href} 
        >
            {details.display}
        </a>
    ) : (
        <button 
            type="button" 
            className={details.style} 
            onClick={details.onclick}
            id={details.id}
        > 
            {details.display} 
        </button>
    );
}

// Dropdown component
export function DropDown({ options }) {
    return (
        <div className={styles.dropdown}>
            {Object.entries(options).map(([key, value]) => (
                <Link key={key} to={value} className={styles.dropdownItem}>
                    {key}
                </Link>
                ))}
        </div>
    );
}