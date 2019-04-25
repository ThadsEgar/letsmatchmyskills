import React, {Component} from "react";
import ReactDOM from "react-dom";

class JobComponent extends Component{
  constructor(){
    super();
    this.state ={
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(){
    var url = "https://jobs.github.com/positions.json?description=python&location=new+york";
    var urlTest = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result         });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render(){
    var {isLoaded, items} = this.state;
    if(!isLoaded){
      return <div>Loading...</div>;
    }else{
    return(
      <ul>
        {items.map(item =>(
          <li key={item.id}>
            {item.id} | {item.description}
          </li>
        ))}
      </ul>

    );
  }
  }
}

export default JobComponent;
