import React from 'react';


function GameScore(props) {
    return (
        <>
            <span className='game-score'>Score: {props.score} </span>
        </>
    )
}

export default GameScore;