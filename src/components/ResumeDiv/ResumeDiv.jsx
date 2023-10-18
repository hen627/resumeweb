export default function ResumeDiv(props){
    return(
        <div>
            <div className="WorkPlace">
                <h3>{props.workplace}</h3> 
                <h3>{props.years}</h3> 
            </div>
            <section className="WorkDescription">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
            </section>
        </div>
    )
}