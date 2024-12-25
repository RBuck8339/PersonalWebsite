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
            <h2 className={styles.title}>{details.Name}</h2>
            <i className={styles.info}>{details.Location} {details.Date && <i className={styles.info}>: {details.Date}</i>}</i>
            <hr className={styles.hr} />
            {details.Description && <p>{details.Description}</p>}
            {details.ProjectLink && <p>{details.ProjectLink}</p>}
            {details.Img && <img href={details.Img} alt='imgtext'></img>}
            <p><b>Skills: </b>{Array.isArray(details.Tags) ? details.Tags.join(', ') : details.Tags}</p>
        </div>
    );
}

export function Position({details}){
    return (
        <div className={styles.Position}>
            <div className={styles.headerText}>
                <h2 className={styles.title}>{details.Name}</h2>
                <i className={styles.info}>{details.Location} {details.Date && <i className={styles.info}>: {details.Date}</i>}</i>
            </div>
            <hr className={styles.hr} />
            {details.Description && <p>Description: {details.Description}</p>}
            <p><b>Skills: </b>{Array.isArray(details.Tags) ? details.Tags.join(', ') : details.Tags}</p>
        </div>
    );
}

export function Education({details}){
    return (
        <div className={styles.Education}>
            <div className={styles.Header}>
                <div className={styles.headerText}>
                    <h2 className={styles.title}>{details.School}</h2>
                    <p>B.S. {details.Major}; Minor: {details.Minor}</p>
                    <i>GPA: {details.GPA}</i> 
                </div>
                {details.Img}
            </div>
            <i>{details.Dates}</i>
            <p>Organizations: {Array.isArray(details.Organizations) ? details.Organizations.join(', '): details.Organizations}</p>
            <p>Coursework: {Array.isArray(details.Coursework) ? details.Coursework.join(', '): details.Coursework}</p>
        </div>
    )
}

export function Skill({details}){
    return (
        <div id="Skill" className={styles.skill}>
            {details.Display}
            <p className={styles.skillText}>{details.Name}</p>
        </div>
    );
}

export function Publication({details}){
    return (
        <div id="Publication" className={styles.Publication}>
            <h2 className={styles.title}>Title: {details.Title}</h2>
            <i>Published: {details.Date}</i>
            <p>Link: {details.Link}</p>
        </div>
    )
}