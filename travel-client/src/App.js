import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Landing from "./Components/Landing";
import ProfilePage from "./Components/Profile/ProfilePage";
import TokenService from "./services/TokenService";
import EditYourItinForm from "./Components/YourItin/EditYourItinForm";
import EditUserProfileForm from "./Components/YourItin/EditUserProfileForm";
import EditYourActivityForm from "./Components/YourItin/EditYourActivityForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      itineraries: [],
      activities: [],
      users: []
    };
    this.queryItins = this.queryItins.bind(this);
    this.editYourItinForm = this.editYourItinForm.bind(this);
    this.editUserProfileForm = this.editUserProfileForm.bind(this);
    this.newItinerary = this.newItinerary.bind(this);
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
  newItinerary(newItinerary) {
    axios({
      url: "http://localhost:8080/api/nowander/dashboard",
      method: "POST",
      data: newItinerary
    }).then(res => {
      this.queryItins();
    });
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

  // _______________Leon 2/21

  editYourItinForm(data) {
    axios({
      url: `http://localhost:8080/api/noWander/itinerary/${data.id}`,
      method: "put",
      data
    }).then(response => {
      console.log(
        "In App.editYourItinForm, received response from server. response.data:",
        response.data
      );
      this.setState(previousState => {
        return { itinerary: previousState.itinerary.concat(response.data) };
      });
    });
  }

  editUserProfileForm(data) {
    axios({
      url: `http://localhost:8080/api/noWander/users/${data.id}`,
      method: "put",
      data
    }).then(response => {
      console.log(
        "In App.editUserProfileForm, received response from server. response.data:",
        response.data
      );
      this.setState(previousState => {
        return { users: previousState.users.concat(response.data) };
      });
    });
  }

  // _______________________
  componentDidMount() {
    this.queryItins();
    console.log("The token Serv: ", TokenService.read());
    console.log("Got login? :", this.state.login);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Landing
            newItinerary={this.newItinerary}
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
