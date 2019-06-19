import React from 'react';

class TopScore extends React.Component {
    state = {
        topScore: 0
    }

    // Top Score state change logic here

    render() {
        return (
            <>
                <span>Top Score: {this.state.topScore} </span>
            </>
        )
    }
}

export default TopScore;