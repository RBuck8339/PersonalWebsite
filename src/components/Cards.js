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

export function Profile(){

}