import React from 'react';

const InputChild = ({ inputText, handleInput, handleToggle }) => {
    const handleChange = (e) => {
        handleInput(e.target.value);
    };

    return (
        <div>
            <h2>I'm responsible for handling input.</h2>
            <input value={inputText} onChange={handleChange} />
            <button onClick={handleToggle}>Label on/off</button>
        </div>
    );
};

export default InputChild;
