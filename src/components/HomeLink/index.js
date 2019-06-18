import React from 'react';


function HomeLink(props) {
    console.log(props);
    return (
        <h3>{props.text} </h3>
    );
}

export default HomeLink;