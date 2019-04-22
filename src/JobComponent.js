import React, {Component} from "react";
import ReactDOM from "react-dom";

class JobComponent extends Component{

  Person.defaultProps = { positionName: "DefaultDescription",
companyName: "DefaultCompany",
description: "DefaultDesc" };


  render(){
    return(
      <div>
      <div>{ this.props.name } (age: { this.props.positionName })</div>

      </div>
    );
  }
}

export default JobComponent;
