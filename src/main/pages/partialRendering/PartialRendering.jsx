import React from 'react';

class PartialRendering extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    increment() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Partial rendering example - inspect this page using browser tools</h1>
                    <h2>Current time : {this.state.date.toLocaleTimeString()}</h2>
                </div>
                <div>
                    <h1>Time button was pressed: {this.state.counter}</h1>
                    {/* <input type={'button'} onClick={increment}></input> */}
                    <button onClick={this.increment.bind(this)}>Increment</button>
                </div>
            </div>
        );
    }
}

export default PartialRendering;
