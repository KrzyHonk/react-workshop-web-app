import React, { useState } from 'react';
import DisplayChild from './DisplayChild';
import InputChild from './InputChild';

const ParentFunctionalComponent = () => {
    const [value, setValue] = useState('');
    const [toogle, setToogle] = useState(false);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const switchLabelDisplay = () => {
        setToogle(!toogle);
    };

    return (
        <div>
            <h1>I'm the parent component</h1>
            <DisplayChild textToDisplay={value} labelToggle={toogle} />
            <br />
            <InputChild inputText={value} handleInput={handleChange} handleToggle={switchLabelDisplay} />
            <br />
        </div>
    );
};

export default ParentFunctionalComponent;
