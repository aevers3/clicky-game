import React from 'react';
import ImageTile from '../ImageTile';
import images from '../../images';
import './style.css';


function Game(props) {
    console.log('game', props);
    let dupImages = props.images.slice();
    let shuffledImages = [];
    for (let i=0; i < 12; i++) {
        // Randomly select an item from dupImages, save index for splice later
        let index = Math.floor(Math.random() * dupImages.length);
        let randomImage = dupImages[index];
        // Push random image to shuffledImages array
        shuffledImages.push(randomImage);
        // Remove random image from dupImages to avoid duplicates on page
        dupImages.splice(index, 1);
    }
    console.log('shuffled', shuffledImages);
    return (
        <div className='gameWrapper container'>
            {/* Map over the images.json array and create image tiles. */}
            {shuffledImages.map(image => (
                <ImageTile
                    handleClick={props.handleClick}
                    key={image.id}
                    id={image.id}
                    image={image.image}
                    isClicked={image.isClicked}
                />
            ))}
        </div>
    );
}

export default Game;