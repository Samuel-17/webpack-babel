import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    cep: {},
  };

  componentDidMount() {
    const CEP = 0000000;https://github.com/Samuel-17/webpack-babel/blob/main/src/App.jsx
    fetch(`https://viacep.com.br/ws/${CEP}/json/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({cep:data})
      });
  }

  render() {
    const {cep} = this.state; 
    return (<h1>My cep {cep}</h1>);
    
  }
}

export default App;
