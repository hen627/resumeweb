import HeaderComponent from '../../components/Header/HeaderComponent'
import Version from '../../components/Version/Version'


export default function about(){

    return(
        <div>
                <HeaderComponent></HeaderComponent>
            <main className="AboutWrapper">
                <p>An experimental website attached to my resume, it uses aws to handle api calls to openAI as well as vector based databases to search and retrieve information related to inquiries asked. It's not a straight call to chatGPT, hence why responses are a bit stiff. The concept behind the live chat is that with enough questions asked, eventually it will serve to reply the same way I would, the more questions asked the more questions I'll be able to feed it. Like an interactive personal letter. Right now it is barren but the foundation is set and the scalability is there. 
                <br/><br/> Current version is 0.8. For 0.9 and 1.0 I plan on adding more images and animations to make the website more alive, as well as removing generic images as I now just use photos I've taken during travels. I also want to improve the resume code page layout to use grid instead of flex.<br/> <br/> Thank you for reading.</p>
            </main>
            <Version/>

        </div>
    )

}