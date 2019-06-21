import React from 'react';
import HomeLink from '../HomeLink';
import Message from '../Message';
import Scoreboard from '../Scoreboard';
import './style.css';

function Navbar(props) {
    console.log('navp', props)
    return (
        <div className='navbar fixed-top navbar-custom p-0 d-flex justify-content-around'>
            <div className='col-4 text-center'>
                <HomeLink
                    text='Clicky Game'
                />
            </div>
            <div className='col-4 text-center'>
                <Message
                    lastGuessed={props.lastGuessed}
                />
            </div>
            <div className='col-4 text-center'>
                <Scoreboard
                    incrementScore={props.incrementScore}
                    score={props.score}
                    topScore={props.topScore} />
            </div>
        </div>
    )
}

export default Navbar;