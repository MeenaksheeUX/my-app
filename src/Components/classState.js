import React, { Component } from "react";

class StateDemo extends Component {
  constructor() {
    super();
    this.state = {
      name: "Meenakshee",
      age: 25,
      country: "India"
    };
  }

  alpha = () => this.setState({ age: 20 });

  render() {
    return (
      <div>
          <h1>Changing State Within Component</h1>
          <p>
            {this.state.name}, {this.state.age}
          </p>
          <button onClick={this.alpha}>click me</button>
      </div>
    );
  }
}

export default StateDemo;
