import React from "react";

function ArrMap() {
  var names = ["Meen", "Anji", "Aast"];
  return (
    <div>
      <h1>Array Map Function</h1>
      {
      names.map(function(name, index) {
        return <div key={index}> Hello, {name}!</div>;
      })
      }
    </div>
  );
}

export default ArrMap;