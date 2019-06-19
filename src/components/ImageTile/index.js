import React from 'react';
import './style.css';
import images from '../../images';

// class ImageTile extends React.Component {
//     state = {
//         images
//     }

//     handleClick = props => {
//         console.log('chosen props', props);
//         let chosen = props.isClicked;
//         console.log(chosen);
//         chosen = true;
//         console.log(chosen);

//         this.setState({ chosen });
//     }
    

//     render() {
//         console.log('new state', this.state)
//         return (
//             <div className="col-3 text-center">
//                 <div className="image-tile"
//                     onClick={() => this.handleClick(this.props)} >
//                     <h1>{this.props.id} </h1>
//                 </div>
//             </div>
//         );
//     }
// }

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