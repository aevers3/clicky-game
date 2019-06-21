import React from 'react';
import './style.css';

function ImageTile(props) {
    return (
        <div className=" text-center">
            <div className="image-tile"
                onClick={() => props.handleClick(props)} >
                {/* <h1>{props.id} </h1> */}
                {<img src={props.image} className='game-image'></img>}
                
            </div>
        </div>
    );
}

export default ImageTile;