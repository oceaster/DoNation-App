// REACT IMPORTS
import { render } from 'react-dom'

// LOCAL APP IMPORTS
import './header.css'
import Home from '../home/home.js'
import Profile from '../profile/profile.js'
import PledgeSelect from '../pledgeSelect/pledgeSelect.js'
import PledgeResult from '../pledgeResult/pledgeResult.js'

const navbarButtons = [
    'navbar_home',
    'navbar_make_pledge',
    'navbar_view_profile'
]

const navbarSelect = (button) => {
    const btn = document.getElementById(button)
    for (const navBtn in navbarButtons) {
        const thisBtn = document.getElementById(navbarButtons[navBtn])
        thisBtn.style.color = 'darkgrey'
        thisBtn.style.borderBottom = '1px solid lightgrey'
    }
    btn.style.color = 'black'
    btn.style.borderBottom = '1px solid black'
}

const navbarSelectHome = () => {
    navbarSelect('navbar_home')
    render(
        <Home />,
        document.getElementById('app')
    )
}

const navbarSelectMakePledge = () => {
    navbarSelect('navbar_make_pledge')
    render(
        <>
        <PledgeSelect />
        <PledgeResult />
        </>,
        document.getElementById('app')
    )
}

const navbarSelectViewProfile = () => {
    navbarSelect('navbar_view_profile')
    render(
        <Profile />,
        document.getElementById('app')
    )
}

const Header = () => {
    return <>
    <div id='app-header'>
        <h2> DoNation </h2>
        <h1> Tech Test </h1>
    </div>
    <div id='app-navbar'>
        <button
            id='navbar_home'
            style={{color:'black', borderBottom:'1px solid black'}}
            onClick={navbarSelectHome}
        > Home </button>
        <button
            id='navbar_make_pledge'
            onClick={navbarSelectMakePledge}
        > Make Pledge </button>
        <button
            id='navbar_view_profile'
            onClick={navbarSelectViewProfile}
        > View Profile </button>
    </div>
    </>
}

export default Header
export {
    navbarSelectViewProfile
}
