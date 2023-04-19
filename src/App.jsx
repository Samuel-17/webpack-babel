import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    cep: [],
  };

  componentDidMount() {
    fetch("https://viacep.com.br/ws/30628110/json/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({cep:data})
      });
  }

  render() {
    const myName = "Vittor";
    const {cep} = this.state; 
    return <h1>Hello World {cep.logradouro}</h1>;
  }
}

export default App;
