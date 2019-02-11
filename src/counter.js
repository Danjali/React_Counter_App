import React from 'react';
import ReactDom from 'react-dom';

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrementCount() {
    this.setState({
      count: this.state.count - 1
    });
  }

  resetCount() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div className="parent">
        <h1>{this.state.count}</h1>
        <button className="btn" onClick={this.incrementCount.bind(this)}>Increment</button>
        <button className="btn" onClick={this.decrementCount.bind(this)}>Decrement</button>
        <button className="btn" onClick={this.resetCount.bind(this)}>Reset</button>
      </div>
    );
  }
}
