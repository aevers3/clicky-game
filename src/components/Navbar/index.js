import React from 'react';
import HomeLink from '../HomeLink';
import WelcomeMessage from '../WelcomeMessage';
import Scoreboard from '../Scoreboard';
import './style.css';

function Navbar() {
    return (
        <div className='navbar fixed-top navbar-custom p-3 d-flex justify-content-around'>
            <HomeLink 
                text='Clicky Game'
            />
            <WelcomeMessage
                text='Click an image to begin!'
            />
            <Scoreboard />
        </div>
    )
}

export default Navbar;