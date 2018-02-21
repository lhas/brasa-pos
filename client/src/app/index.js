import React, { Component } from "react";
import AppRouter from "./routes";

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
