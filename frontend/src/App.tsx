import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect, sendMsg } from "./api/index"

function App() {
  connect();
  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <button onClick={ () => send() }>Hit</button>
        </div>
      </header>
    </div>
  );
}

function send() {
  console.log("Hello");
  sendMsg("Hello")
}

export default App;
