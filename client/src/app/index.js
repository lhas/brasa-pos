import React, { Component } from "react";
import AppRouter from "./routes";
import "./stylesheet.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppRouter />
      </div>
    );
  }
}

export default App;
