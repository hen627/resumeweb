export default function ProjectWindow(props){
    return(
        <div className="ProjectWrapper">
            <img src={props.image}></img>
            <h2>{props.projectName}</h2>
            <p>{props.projectDescription}</p>
            <p>{props.projectLink}</p>
        </div>
    )
}