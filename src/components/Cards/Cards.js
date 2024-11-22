import styles from './Cards.module.css';

export function Project(details){
    return (
        <div id={details.id}>
            <h2>{details.name}</h2>
            <img src={details.img} alt={details.name}/>
            {details.location && <i>{details.location}</i>}
            {details.duration && <i>{details.duration}</i>}
            <p>{details.description}</p>
            <p><b>Skills: </b>{Array.isArray(details.skills) ? details.skills.join(', ') : details.skills}</p>
        </div>
    );
}



export function Experience({details}){
    return (
        <div className={styles.Experience}>
            <h2>{details.Name}</h2>
            <i className={styles.info}>{details.Location} {details.Date && <i className={styles.info}>: {details.Date}</i>}</i>
            <hr className={styles.hr} />
            {details.Description && <p>{details.Description}</p>}
            {details.ProjectLink && <p>{details.ProjectLink}</p>}
            {details.Img && <img href={details.Img} alt='imgtext'></img>}
            <p><b>Skills: </b>{Array.isArray(details.Tags) ? details.Tags.join(', ') : details.Tags}</p>
        </div>
    );
}

export function Education({details}){
    return (
        <div className={styles.Education}>
            <h2>{details.School}</h2>
            <p>B.S. {details.Major}; Minor: {details.Minor}</p>
            <i>GPA: {details.GPA}</i>
            <i>{details.Dates}</i>
            <p>Organizations: {Array.isArray(details.Organizations) ? details.Organizations.join(', '): details.Organizations}</p>
            <p>Coursework: {Array.isArray(details.Coursework) ? details.Coursework.join(', '): details.Coursework}</p>
        </div>
    )
}

// Needs editing; serves as a base for now
export function Profile(){
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

export function Skill({details}){
    return (
        <div id="Skill" className={styles.skill}>
            <img className={styles.skillImage} href={details.Img} alt={details.Img}/>
            <p>{details.Name}</p>
        </div>
    )
}

export function Publication({details}){
    return (
        <div id="Publication" className={styles.Publication}>
            <h2>Title: {details.Title}</h2>
            <i>Published: {details.Date}</i>
            <p>Link: {details.Link}</p>
        </div>
    )
}