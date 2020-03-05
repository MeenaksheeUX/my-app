import React, { Component } from "react";

class ShowAlert extends Component {
  showAlert() {
    alert("I am an alert!!!");
  }

  render() {
    return (
      <div>
        <h1>Listening to events</h1>
        <button onClick={this.showAlert}>Show Alert</button>
      </div>
    );
  }
}
export default ShowAlert;
