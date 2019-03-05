import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let data =['a','b','c'];
    let mappedata=data.map ((item)=>{
       return item +' ';
    })
    let data2=['lol1','lol2','lol3'];
    let mappeddata2=data2.map((item)=>{
       return item;
    })
    

    return (
      <div className="App">
       {mappedata}
       {mappeddata2}
      </div> 
    );
  }
}

export default App;
