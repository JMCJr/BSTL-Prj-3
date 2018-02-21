import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Landing from "./Components/Landing";
import ProfilePage from "./Components/Profile/ProfilePage";
import TokenService from "./services/TokenService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      itineraries: []
    };
    this.queryItins = this.queryItins.bind(this);
  }

  login(data) {
    axios("http://localhost:3000/users/login", {
      method: "POST",
      data
    })
      .then(resp => {
        TokenService.save(resp.data.token);
      })
      .catch(err => console.log(`err: ${err}`));
  }

  register(data) {
    axios("http://localhost:3000/users/", {
      method: "POST",
      data
    })
      .then(resp => {
        TokenService.save(resp.data.token);
      })
      .catch(err => console.log(`err: ${err}`));
  }

  logout(e) {
    e.preventDefault();
    TokenService.destroy();
  }

  queryItins() {
    axios("http://localhost:8080/api/nowander/dashboard").then(response => {
      console.log("got a response. response.data:", response.data);
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
          <Landing
            register={this.register}
            login={this.login}
            logout={this.logout}
          />
        </div>
      </Router>
    );
  }
}

export default App;
