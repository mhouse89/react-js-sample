import React, { Component } from "react";
import { Container, NavBar, BadComponent } from "./components";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <script>window.__STATE__ = ${JSON.stringify({ props })}</script>
        </div>
        <p className="App-intro">
          <NavBar />
          <Container />
          <BadComponent data={"test"} />
        </p>
      </div>
    );
  }
}

export default App;
