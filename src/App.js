import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";


/* axios.get('/user?ID=12345')
 .then(function (response) {
   // handle success
   console.log(response);
 })  */
 
 Class API extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { attribute : "value" };
    }
}

function App() {
  useEffect(/* async */ () => {
     /* await */ axios.get('https://jsonplaceholder.typicode.com/users').then((data)=>{
      console.log(data.data)
      state=dtata.data
    })
      
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  

  }
export default App;
