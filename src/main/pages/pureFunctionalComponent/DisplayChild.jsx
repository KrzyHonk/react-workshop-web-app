import React, { useEffect } from 'react';

const DisplayChild = ({ textToDisplay, labelToggle }) => {
    useEffect(() => {
        console.log("I'm displayed during mounting");

        return () => {
            console.log("I'm displayed during unmounting");
        };
    }, []);

    useEffect(() => {
        console.log("I'm displayed after every render");
    });

    useEffect(() => {
        console.log(`Received text to display: ${textToDisplay}`);
    }, [textToDisplay]);

    return (
        <div>
            <h3>I'm responsible for displaying data from Parent!</h3>
            <h2>Hello {textToDisplay}!</h2>
            {labelToggle && <h3>Now you see me</h3>}
        </div>
    );
};

export default DisplayChild;
