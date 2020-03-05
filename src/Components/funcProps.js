import React from "react";

function Message(Props) {
  return <h5> Good to have you back, {Props.username}</h5>;
}

function PropsDemo() {
  return (
    <div>
      <h1>Props Demo</h1>
      <Message username="Meenakshee" />
      <Message username="Anjali" />
      <Message username="Aastha" />
    </div>
  );
}

export default PropsDemo;
