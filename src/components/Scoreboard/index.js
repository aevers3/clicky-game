import React from 'react';
import GameScore from '../GameScore'
import TopScore from '../TopScore';

function Scoreboard() {
    return (
        <div>
            <h3>
                <GameScore />
                <span> | </span>
                <TopScore />
            </h3>
        </div>
    )
}

export default Scoreboard;