import React, { Component } from 'react';
import { Button,  Form } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Lets Match Your Skills
        </div>

        <Form>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter your skills</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          Test
    </Form.Text>
  </Form.Group>
  </Form>

  <Button variant="primary" size="lg" block>Primary</Button>

      </div>
    );
  }
}

export default App;
