import React from "react";
import axios from "axios";

class PersonList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div>
        <h1>Set State Of Response From Axios In React</h1>
        <ul>
          {this.state.persons.map(person => (
            <li>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PersonList;
