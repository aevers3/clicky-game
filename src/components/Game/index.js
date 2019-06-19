import React from 'react';
import ImageTile from '../ImageTile';
import images from '../../images';
import './style.css';

class Game extends React.Component {
    state = {
        images
    }

    handleClick = props => {
        console.log(props.isClicked)
        // If the image has not been clicked, update the state to clicked. Otherwise, game over.
        if (!props.isClicked) {
            this.setState((state) => {
                let chosen = state.images.filter(image => image.id === props.id);
                // Extract filtered object from returned array
                chosen = chosen[0];
                console.log('chosen', chosen);
                chosen.isClicked = true;
                return chosen;
            });
        } else {
            alert('game over');
        }
        
    }

    render() {
        console.log('new state', this.state);
        console.log(images);
        return (
            <div className='gameWrapper container'>
                {this.state.images.map(image => (
                    <ImageTile
                        handleClick={this.handleClick}
                        key={image.id}
                        id={image.id}
                        image={image.image}
                        isClicked={image.isClicked}
                    />
                ))}
            </div>
        );
    }
}

export default Game;