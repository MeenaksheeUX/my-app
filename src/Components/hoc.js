import React from "react";

const withColor = Element => props => <Element {...props} style={{color: "red"}} />;

const Button = () => {
  return <button>test</button>;
};

const ColoredButton = withColor(Button);

function HOC() {
  return (
    <div className="App">
      <h1>Higher Order Components</h1>
      <ColoredButton />
    </div>
  );
}

export default HOC;
