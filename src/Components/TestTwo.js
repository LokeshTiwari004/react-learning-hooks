import React, { Component } from "react";

class TestTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePositon = (event) => {
    console.log("Mouse Moved");
    this.setState({ x: event.clientX, y: event.clientY });
  };

  componentDidMount() {
    console.log("Component Mounting Code");
    window.addEventListener("mousemove", this.logMousePositon);
  }

  render() {
    return (
      <div>
        X - {this.state.x}, y - {this.state.y}
      </div>
    );
  }
}

export default TestTwo;
