import ProjectWindow from "../../components/ProjectWindow/ProjectWindow";
import Version from '../../components/Version/Version'
import { project1, project2 } from "../../components/ProjectWindow/projectInfodump";
import HeaderComponent from '../../components/Header/HeaderComponent'
import question from '../../assets/questionmark.png'

export default function projects() {
    return (
        <div>
          <HeaderComponent></HeaderComponent>
          <h2>This page is a mockup and unfinished.</h2>
          <div className="ProjectsFlex">
          <ProjectWindow image={question}
          {...project1}/>
          <ProjectWindow image={question}
          {...project2}/>
          </div>
          <Version/>
        </div>
      );
}