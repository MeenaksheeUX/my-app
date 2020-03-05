import React, { Component } from 'react';
 
class UpdateContentOnClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "Default Content"
    }
  }
 
  updateContent = () => {
      this.setState({ message: "Updated Content!"});
  }
 
  render() {
    return (
      <div>
        <h1>React JS update Div content on click</h1>
        <div className="h1 bg-secondary text-white text-center p-2">
          { this.state.message }
        </div>
        <div className="text-center">
          <button className="btn btn-secondary" onClick={this.updateContent}>
            Click Me
          </button>
        </div>
      </div>
    );
  }
}
 
export default UpdateContentOnClick;
