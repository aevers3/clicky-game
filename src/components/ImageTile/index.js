import React from 'react';
import './style.css';

function ImageTile(props) {
    // console.log(props)
    return (
        <div className="col-3 text-center">
            <div className="image-tile"
                onClick={() => props.handleClick(props)} >
                <h1>{props.id} </h1>
            </div>
        </div>
    );
}

export default ImageTile;