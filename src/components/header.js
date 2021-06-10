import React from 'react'
import Navbar from './navbar';

const Header = ({click, getraces}) => {

    return (
        <header>
            <button class='racerefresh btn btn-secondary' onClick={getraces}><i class="fas fa-sync-alt fa-2x"></i></button>
            <Navbar click={click}/>
        </header>
    )
}

export default Header
