import React from 'react';
import DisplayChild from './DisplayChild';
import InputChild from './InputChild';

const ParentFunctionalComponent = () => {
    // TODO Add state and change handling logic

    return (
        <div>
            <h1>I'm the parent component</h1>
            <DisplayChild />
            <br />
            <InputChild />
            <br />
        </div>
    );
};

export default ParentFunctionalComponent;
