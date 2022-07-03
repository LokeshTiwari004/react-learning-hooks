import React, { Component } from "react";
import TestThreeChild from "./TestThreeChild";

class TestTwoParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: true,
    };
  }
  
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState((preState) => ({ display: !preState.display }))
          }
        >
          Toggle Display
        </button>
        {this.state.display && <TestThreeChild />}
      </div>
    );
  }
}

export default TestTwoParent;
