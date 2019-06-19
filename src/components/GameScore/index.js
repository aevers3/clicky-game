import React from 'react';

class GameScore extends React.Component {
    state = {
        gameScore: 0
    }

    // Game score state change logic here

    render() {
        return (
            <>
                <span>Score: {this.state.gameScore} </span>
            </>
        )
    }
}

export default GameScore;