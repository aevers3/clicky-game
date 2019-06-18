import React from 'react';
import GameScore from '../GameScore'
import TopScore from '../TopScore';

function Scoreboard() {
    return (
        <div>
            <h3>
                <GameScore
                    text='Score: 0'
                />
                <span> | </span>
                <TopScore
                    text='Top Score: 0'
                />
            </h3>
        </div>
    )
}

export default Scoreboard;