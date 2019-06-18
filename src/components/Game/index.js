import React from 'react';
import ImageTile from '../ImageTile';
import images from '../../images';
import './style.css';

class Game extends React.Component {
    state = {
        images
    }

    render() {
        console.log('images', images)
        return (
            <div className='gameWrapper container'>
                {this.state.images.map(image => (
                    <ImageTile
                        key={image.id}
                        id={image.id}
                        image={image.image}
                    />
                ))}
            </div>
        );
    }
}

export default Game;