import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let data =['a','b','c'];
    let mappedata=data.map ((item)=>{
       return item +' ';
    })

    return (
      <div className="App">
       {mappedata}
      </div> 
    );
  }
}

export default App;
