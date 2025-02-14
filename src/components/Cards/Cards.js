import { motion } from "framer-motion";
import styles from './Cards.module.css';

export function Project(details){
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.20, duration: 0.6 }}
            viewport={{ once: true }}
            id = {details.id}
        >

            <h2>{details.name}</h2>
            <img src={details.img} alt={details.name}/>
            {details.location && <i>{details.location}</i>}
            {details.duration && <i>{details.duration}</i>}
            <p>{details.description}</p>
            <p><b>Skills: </b>{Array.isArray(details.skills) ? details.skills.join(', ') : details.skills}</p>
        </motion.div>
    );
}


export function Experience({details}){
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.20, duration: 0.8 }}
            viewport={{ once: true }}  
            className={styles.Experience}
        >
            <div className={styles.ExperienceBody}>
                <h2 className={styles.title}>{details.Name}</h2>
                <i className={styles.info}>{details.Location} {details.Date && <i className={styles.info}>: {details.Date}</i>}</i>
                {details.Description && <p>{details.Description}</p>}
                {details.ProjectLink && <p>{details.ProjectLink}</p>}
                {details.Img && <img href={details.Img} alt='imgtext'></img>}
                <p><b>Skills: </b>{Array.isArray(details.Tags) ? details.Tags.join(', ') : details.Tags}</p>
            </div>
            
        </motion.div>
    );
}


export function Position({details}){
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.30, duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.Position}
        >
            <div className={styles.Info}>
                <div className={styles.Header}>
                    <div className={styles.headerText}>
                        <h2 className={styles.title}>{details.Name}</h2>
                        <p className={styles.meta}>
                            <i>{details.Dates}</i> | {details.Location}
                        </p>
                    </div>
                </div>
                <div className={styles.Body}>
                    <div className={styles.Responsibilities}>
                        <p><strong>Responsibilities:</strong></p>
                        <ul>
                            {details.Responsibilities.map((item, idx) =>
                                <li key={idx}>{item}</li>
                            )}
                        </ul>
                    </div>
                    
                    <p className={styles.Skills}><strong>Skills: </strong>{Array.isArray(details.Skills) ? details.Skills.join(', ') : details.Skills}</p>
                </div>            
            </div>
        </motion.div>
    );
}


export function Education({details}){
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.30, duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.Education}
        >
            <div className={styles.Info}>
                <div className={styles.Header}>
                    <div className={styles.headerText}>
                        <h2 className={styles.title}>{details.School}</h2>
                        <p className={styles.meta}>
                            <i>{details.Dates}</i> | {details.Location}
                        </p>
                        <p className={styles.degree}>
                            <strong>B.S. {details.Major}</strong>; Minor: {details.Minor}
                        </p>
                    </div>
                    {details.Img}
                </div>
                <div className={styles.Body}>
                    <i className={styles.gpa}><strong>GPA: </strong>{details.GPA}/4.0</i>
                    <p className={styles.Organizations}><strong>Organizations: </strong>{Array.isArray(details.Organizations) ? details.Organizations.join(', '): details.Organizations}</p>
                    <p className={styles.Coursework}><strong>Relevant Coursework: </strong>{Array.isArray(details.Coursework) ? details.Coursework.join(', '): details.Coursework}</p>
                </div>
            </div>
        </motion.div>
    )
}


export function Skill({details}){
    return (
        <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.30, duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.skill}
            id="Skill" 
        >
            <div className={styles.skillContainer}>
                {details.Display}
                <div className={styles.overlay}>
                    <p className={styles.skillText}>{details.Name}</p>
                </div>
            </div>
        </motion.div>
    );
}


export function Publication({details}){
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.30, duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.Publication}
            id="Publication" 
        >
            <h2 className={styles.title}>Title: {details.Title}</h2>
            <i>Published: {details.Date}</i>
            <p>Link: {details.Link}</p>
        </motion.div>
    )
}

export function Tag({name, onClick}){
    // Do I want to animate here?
    return(
        <div id="Tag" className={styles.Tag} onClick={onClick}>
            {/*Tag logo?*/}
            <p>{name}</p>
        </div>
    )
}