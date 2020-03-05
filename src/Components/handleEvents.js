import React from "react";
import { Button } from "react-bootstrap";

class Item extends React.Component {
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Handle Events In React</h1>
        <span className={this.styleBadge()}>{this.styleCount()}</span>
        <Button onClick={this.handleIncrement} className="btn btn-primary">
          Increment
        </Button>
      </React.Fragment>
    );
  }

  styleBadge() {
    let classes = "badge m-3 badge-";
    classes += this.state.count === 0 ? "warning" : "info";
    return classes;
  }

  styleCount() {
    const { count } = this.state;
    return count === 0 ? "No Items" : count;
  }
}

export default Item;
