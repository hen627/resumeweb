import Navigators from '../Button/Navigators'
import { Link } from 'react-router-dom'

export default function HeaderComponent(){
    return(
        <div className={`NavigationDiv`}>
            <header className={`NavigationWrapper`}>
                <Link to='/resume'><Navigators variant='NavElement'>Resume</Navigators></Link>
                <Link to='/live'><Navigators variant='NavElement'>Live chat</Navigators></Link>
                <Link to='/about'><Navigators variant='NavElement'>About</Navigators></Link>
                <Link to='/projects'><Navigators variant='NavElement'>Projects</Navigators></Link>
            </header>
        </div>
    )
}