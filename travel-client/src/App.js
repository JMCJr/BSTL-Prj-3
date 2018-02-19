import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import axios from 'axios';
import Landing from "./Components/Landing";
import ProfilePage from "./Components/Profile/ProfilePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      itineraries: []
    };
    this.queryItins = this.queryItins.bind(this);
  }

  queryItins() {
    axios("http://localhost:8080/api/nowander/dashboard").then(response => {
      console.log('got a response. response.data:', response.data);
      const itins = response.data.itineraries;
      
      this.setState({ itineraries: response.data.itineraries });
    });
  }

  componentDidMount() {
    this.queryItins();
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