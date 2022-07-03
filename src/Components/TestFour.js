import React, { Component } from "react";

class TestFour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  tick = () => {
    this.setState((preState) => ({ count: preState.count + 1 }));
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
      </div>
    );
  }
}

export default TestFour;
