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

  enterSkill() {
    var skillInput = document.getElementById("skillForm").value;

    if (!skillsArray.includes(skillInput)) {
      skillsArray.push(skillInput);
    }else{
      {/*Do nothing*/}
    }
    console.log(skillsArray);
  }

  render() {
    return (
      <div className="App">
        {/*JavaScript*/}
        <div className="Welcome">Lets Match Your Skills</div>
        <div>Skills List</div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter your skills</Form.Label>
            <Form.Control id="skillForm" placeholder="Enter skill" />
          </Form.Group>
        </Form>
        <Button variant="primary" size="lg" onClick={this.enterSkill} block>
          Add Skill
        </Button>
        <Button variant="primary" size="lg" block>
          Lets Go!.ß
        </Button>
        <JobComponent />
      </div>
    );
  }
}

export default App;
