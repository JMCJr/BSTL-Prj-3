import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing";
import ProfilePage from "./Components/Profile/ProfilePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false
    };
  }

  render() {
    return (
      
      <Router>
        <div className="App">
          <Landing />
        </div>
      </Router>
    );
  }
}

export default App;