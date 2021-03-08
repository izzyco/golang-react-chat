import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect, sendMsg } from "./api/index"
import Header from './components/Header/Header'
import ChatHistory from './components/ChatHistory/ChatHistory'

interface StateInterface {
  chatHistory: Array<any>
}

class App extends Component<any, StateInterface> {
  constructor(props: any) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg: any) => {
      console.log("New `Message")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }

  send() {
    console.log("Hello");
    sendMsg("Hello")
  }

  render() {
    return (
      <div className="App">
          <Header />
          <ChatHistory chatHistory={this.state.chatHistory} />
          <button onClick={this.send}>Hit</button>
      </div>

    );
  }
}

export default App;
