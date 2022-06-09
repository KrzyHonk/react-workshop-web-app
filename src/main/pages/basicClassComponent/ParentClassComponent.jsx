import React from 'react';
import DisplayChild from './DisplayChild';
import InputChild from './InputChild';

class ParentClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // TODO Add state
    }

    handleChange(newValue) {
        // TODO state update
    }

    render() {
        return (
            <div>
                <h1>I'm the parent component</h1>
                <DisplayChild />
                <br />
                <InputChild />
                <br />
            </div>
        );
    }
}

export default ParentClassComponent;
