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

export function Experience(details){
    return (
        <div id={details.id}>
            <h2>{details.name}</h2>
            <i>{details.location}</i>
            <i>{details.duration}</i>
            <p>{details.description}</p>
            <p><b>Skills: </b>{Array.isArray(details.skills) ? details.skills.join(', ') : details.skills}</p>
        </div>
    );
}

// Needs editing; serves as a base for now
export function Profile(){
    return (
        <div id="Profile" className={styles.profile}>
            <h1>Ronan Buck</h1>
            <p>
                I am a Junior Computer Science major at the University of Central Florida. With a passion for machine learning, and artificial intelligence,
                I am currently an undergraduate researcher with a focus on temporal graph neural networks. 
            </p>
            <img href='logo192.png' />
        </div>
    )
}