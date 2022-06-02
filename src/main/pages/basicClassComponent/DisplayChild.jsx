import React from 'react';

function DisplayChild(props) {
    return (
        <div>
            <h3>I'm responsible for displaying data from Parent</h3>
            <h2>Hello {props.textToDisplay}!</h2>
        </div>
    );
}

export default DisplayChild;
