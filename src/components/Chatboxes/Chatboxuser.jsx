import questionmark from '../../assets/questionmark.png'

export default function ChatboxUser(props){
    return(
        <div className='Chatboxuser'>
            <p className="chatText">{props.text}</p>
            <img className='chatIMG' src={questionmark}></img>
        </div>
    )
}