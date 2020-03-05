import React, { Component } from "react";

class ChangeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.changeText = this.changeText.bind(this);
  }

  changeText(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Data Binding Methods</h1>
        <label htmlFor="name">Enter Text here </label>
        <input type="text" id="name" onChange={this.changeText} />
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}
export default ChangeInput;
