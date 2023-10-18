import HeaderComponent from '../../components/Header/HeaderComponent'
import questionmark from '../../assets/questionmark.png'
import Version from '../../components/Version/Version'
import ResumeDiv from '../../components/ResumeDiv/ResumeDiv'
import { stadarna, fugu, personkollen } from '../../components/ResumeDiv/resumeInfodump'

export default function resume() {
    

    return (
        <div>
        <HeaderComponent></HeaderComponent>
            <div className="ResumeWrapper">
            <main className="MainWrapper">
                <h1>Henry Elias</h1>
                <div className="Contact">
                    <h3>Heneli627@live.com | Sweden | Currently: Student</h3>
                    <h3 className="Section">Work Experience</h3>
                </div>

            </main>
                <ResumeDiv {...stadarna}/>
                <ResumeDiv {...fugu}/>
                <ResumeDiv {...personkollen}/>
                    <h3 className="Esection">Education</h3>
                    <section className="Education">
                    <h4>Folkuniversitetet (JavaScript developer fullstack)</h4>
                    <h4>2022-2024</h4>
                    </section>
                    <section className="Education">
                    <h4>Påhlmans handelsinstitut (Authorized salary and hr-administrator)</h4>
                    <h4>2022</h4>
                    </section>
                    <section className="Education">
                    <h4>Realgymnasiet (High school)</h4>
                    <h4>2010</h4>
                    </section>
                    <h3 className="Esection">Others</h3>
                    <section className="Skills">
                    <h4>Hard skills:</h4>
                    <p>Office-suite, Google-suite, Javascript - Frontend/Backend, English/Swedish</p>
                    </section>
                    <section className="Skills">
                    <h4>Soft skills:</h4>
                    <p>Fast learner, creative</p>
                    </section>
            </div>
            <Version/>

        </div>
    )
}

