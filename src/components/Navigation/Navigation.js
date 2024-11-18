import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './Navigation.module.css';
import emailLogo from '../../assets/images/email.png';
import githubLogo from '../../assets/images/github.png';
import linkedinLogo from '../../assets/images/linkedin.png';


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
        // Pages dropdown button
        {
            id: 'pages_button',
            style: styles.button,
            onclick: () => setDropdownOpen(!dropdownOpen),
            display: 'pages'
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
            {dropdownOpen && (
                <DropDown 
                    options={{
                        Portfolio: "/Portfolio",
                        Skills: "/Skills",
                        Resume: "/Resume", 
                        Publications: "/Publications"
                    }}
                />
            )}
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