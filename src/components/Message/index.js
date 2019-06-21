import React from 'react';
import WelcomeMessage from '../WelcomeMessage';
import GameOverMessage from '../GameOverMessage';
import CorrectMessage from '../CorrectMessage';

function Message(props) {
    console.log('message', props)
    const lastGuessed = props.lastGuessed;
    if ( lastGuessed === 'reset' ) {
        return <WelcomeMessage />
    } else if ( lastGuessed === 'correct' ) {
        return <CorrectMessage />
    } else {
        return <GameOverMessage />
    }
}

export default Message;