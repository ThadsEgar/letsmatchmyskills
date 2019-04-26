import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Form } from "react-bootstrap";
import "./App.css";

//components
import JobComponent from "./JobComponent.js";
//global variables
var skillsArray = [];

//secure will use github jobs

class App extends Component {
  constructor(props){
    super(props);
    this.state = {skills : []};
  }

  enterSkill() {
    var skillInput = document.getElementById("skillForm").value;

    if (!this.state.skills.includes(skillInput)) {
      var joined = this.state.skills.concat(skillInput);
      this.setState({skills : joined});
    }else{
      {/*Do nothing*/}
    }
    console.log(this.state.skills);
  }

  render() {
    return (
      <div className="App">
        {/*JavaScript*/}
        <div className="Welcome">Lets Match Your Skills</div>
        <div>Your skills: {this.state.skills}</div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter your skills</Form.Label>
            <Form.Control id="skillForm" placeholder="Enter skill" />
          </Form.Group>
        </Form>
        <Button variant="primary" size="lg" onClick={this.enterSkill.bind(this)} block>
          Add Skill
        </Button>
        <Button variant="success" size="lg" block>
          Match My Skills!
        </Button>
        <JobComponent />
      </div>
    );
  }
}

export default App;
