import React from 'react';

function InputChild(props) {
    function handleChange(e) {
        props.handleInput(e.target.value);
    }

    return (
        <div>
            <h2>I'm responsible for handling input</h2>
            <input value={props.inputText} onChange={handleChange} />
        </div>
    );
}

export default InputChild;
