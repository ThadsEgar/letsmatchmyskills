import React, {Component} from "react";
import ReactDOM from "react-dom";

class JobComponent extends Component{
  constructor(){
    super();
    this.state ={
      position = "defaultPosition",
      company = "defaultCompany",
      location = "defaultLocation",
      description = "defaultDescription"
    };
  }

  componentDidMount(){
    fetch("https://jobs.github.com/positions.json?description=python&location=new+york")
    .then(results => {
      return results.json();
    }).then(data => {
      let
    })
  }

  render(){
    return(
      <div className="job-container">
        <p className="position"></p>
        <p className="company"></p>
        <p className="location"></p>
        <p className="description"></p>
      </div>
    );
  }
}

export default JobComponent;
