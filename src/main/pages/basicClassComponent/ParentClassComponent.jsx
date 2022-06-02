import React from 'react';
import DisplayChild from './DisplayChild';
import InputChild from './InputChild';
import StyledIconComponent from './StyledIconComponent';
import { BarChart, Search } from '@mui/icons-material';

class ParentClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 'Joe',
        };
    }

    handleChange(newValue) {
        this.setState({ value: newValue });
    }

    render() {
        return (
            <div>
                <h1>I'm the parent component</h1>
                <DisplayChild textToDisplay={this.state.value} />
                <br />
                <InputChild inputText={this.state.value} handleInput={this.handleChange} />
                <br />
                <StyledIconComponent>
                    <BarChart />
                </StyledIconComponent>
                <StyledIconComponent>
                    <Search />
                </StyledIconComponent>
            </div>
        );
    }
}

export default ParentClassComponent;
