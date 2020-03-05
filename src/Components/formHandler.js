import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    //this.state={address: ""}
    //this.state={age: ""}
    this.curriculum = React.createRef()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(this.state.username);
   // alert(this.state.address);
    //alert(this.state.age);
    alert(this.curriculum.current.files[0].name)
    event.preventDefault();
  }

  render() {
    return (
      <div>
          {/* https://flaviocopes.com/react-forms/ */}
        <h1>Form Handlers</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          {/* <br></br><br></br>

          <textarea value={this.state.address} onChange={this.handleChange} />

          <br></br><br></br>

          <select value="{this.state.age}" onChange="{this.handleChange}">
            <option value="teen">Less than 18</option>
            <option value="adult">18+</option>
          </select> */}

          <br></br><br></br>
          <input type="file" ref={this.curriculum} />

          <br></br><br></br>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
