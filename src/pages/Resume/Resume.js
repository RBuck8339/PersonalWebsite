import React from 'react';
import styles from './Resume.module.css';
import resume from '../../assets/documents/RonanBuck_Resume.pdf';


export function Resume(){
    return (
        <div className={styles.resume}>
            <embed className={styles.resumeDisplay}  src={resume} type="application/pdf"/>
        </div>
    );
}