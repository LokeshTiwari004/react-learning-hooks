import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(preProps, preState, snapShot) {
    // console.log(preProps, preState);
    if (this.state.count !== preState.count) {
      console.log("Document Title Updated");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  clickHandler = () => {
    this.setState((preState) => ({ count: preState.count + 1 }));
  };

  changeHandler = (event) => {
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.changeHandler}/>
        <button onClick={this.clickHandler}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default Test;
