import React from 'react';
import GameScore from '../GameScore'
import TopScore from '../TopScore';

function Scoreboard(props) {
    
    return (
        <div>
            <h3>
                <GameScore
                    incrementScore={props.incrementScore}
                    score={props.score}
                />
                <span> | </span>
                <TopScore
                    topScore={props.topScore}
                />
            </h3>
        </div>
    )
}

export default Scoreboard;