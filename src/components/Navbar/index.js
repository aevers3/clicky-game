import React from 'react';
import HomeLink from '../HomeLink';
import WelcomeMessage from '../WelcomeMessage';
import Scoreboard from '../Scoreboard';
import './style.css';

function Navbar() {
    return (
        <div className='navbar fixed-top navbar-custom p-3 d-flex justify-content-around'>
            <div className='col-4 text-center'>
                <HomeLink
                    text='Clicky Game'
                />
            </div>
            <div className='col-4 text-center'>
                <WelcomeMessage
                    text='Click an image to begin!'
                />
            </div>
            <div className='col-4 text-center'>
                <Scoreboard />
            </div>
        </div>
    )
}

export default Navbar;