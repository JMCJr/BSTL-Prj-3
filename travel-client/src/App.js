import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";
import "./Delightful.css";
import axios from "axios";
import Logo from "./Images/LOGO.png";
import Name from "./Images/Name-Logo.png";
// import Landing from "./Components/Landing";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ProfilePage from "./Components/Profile/ProfilePage";

//
import TokenService from "./services/TokenService";
import EditYourItinForm from "./Components/YourItin/EditYourItinForm";
import EditUserProfileForm from "./Components/YourItin/EditUserProfileForm";
import EditYourActivityForm from "./Components/YourItin/EditYourActivityForm";

//ROUTES FROM PROFILE PAGE
import NavHeader from "./Components/Navbar/NavHeader";
import ItinList from "./Components/Profile/ItinList";
import NewItin from "./Components/Profile/NewItin";
import YourItinPage from "./Components/YourItin/YourItinPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "WAITING",
      itineraries: [],
      activities: [],
      user: [],
      dataLoaded: false
    };
    this.queryItins = this.queryItins.bind(this);
    this.editYourItinForm = this.editYourItinForm.bind(this);
    this.editUserProfileForm = this.editUserProfileForm.bind(this);
    this.newItinerary = this.newItinerary.bind(this);
    // SIGN IN FEATURES BIND
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
    this.logout = this.logout.bind(this);
  }
  //BEGIIN AUTH USER LOGIN STUFF
  login(data) {
    console.log("LOGINING");

    console.log("LOGIN - BEFORE AXIOS", this.state);

    axios("http://localhost:3000/users/login", {
      method: "POST",
      data
    })
      .then(resp => {
        TokenService.save(resp.data.token);
        console.log("LOGIN RESPONSE", resp);
        this.setState({
          isLoggedIn: "YES",
          user: resp.data.user
        });
        console.log("LOGIN - AFRTRE AXIOS", this.state.user);
      })
      .catch(err => console.log(`err: ${err}`));
  }

  register(data) {
    console.log("REGISTTERING");
    this.setState({
      isLoggedIn: "WAITING"
    });
    axios("http://localhost:3000/users/", {
      method: "POST",
      data
    })
      .then(resp => {
        TokenService.save(resp.data.token);
        this.setState({
          isLoggedIn: "YES",
          user: resp.data.user
        });
      })
      .catch(err => console.log(`err: ${err}`));
  }

  logout(e) {
    console.log("LOGIUTTTT");
    e.preventDefault();
    TokenService.destroy();
    this.setState({
      isLoggedIn: "NO",
      user: ""
    });
  }

  //END AUTH USER LOGIN STUFF

  //
  newItinerary(newItinerary) {
    axios({
      url: "http://localhost:8080/api/nowander/dashboard",
      method: "POST",
      data: newItinerary,
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    }).then(res => {
      this.queryItins(1);
    });
  }

  queryItins(id) {
    console.log("queryItins", id);
    axios({
      url: "http://localhost:8080/api/nowander/dashboard",
      method: "get",
      // data: id,
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    }).then(response => {
      console.log("got a response. response.data:", response.data);
      this.setState({
        itineraries: response.data.itineraries,
        dataLoaded: true
      });
    });
  }

  // _______________Leon 2/21

  editYourItinForm(data) {
    axios({
      url: `http://localhost:8080/api/noWander/itinerary/${data.id}`,
      method: "put",
      data: data,
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
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
      data: data,
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
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

  checkLogin() {
    this.setState({
      isLoggedIn: "WAITING"
    });
    axios("http://localhost:3000/isLoggedIn", {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`
      }
    })
      .then(resp => {
        this.setState({
          isLoggedIn: resp.data.isLoggedIn
        });
        // this.queryItins();
        console.log("post-login", this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // _______________________
  componentDidMount() {
    // console.log("The token Serv: ", TokenService.read());
    this.checkLogin();
    // this.queryItins(this.state.userID);
    console.log("APPjs mount", this.state.userID);
  }

  render() {
    if (this.state.isLoggedIn === "WAITING") {
      return <div>LOADING</div>;
    } else if (this.state.isLoggedIn === "YES") {
      console.log("TRYING TO GO TO PROFILE");
      return (
        <Router>
          <div className="App">
            <div className="App Backdrop">
              <NavHeader logout={this.logout} />
              <Link to="/dashboard/newitinerary">
                <div className="createNewItinButt">CREATE NEW ITINERARY</div>
              </Link>
              <Switch>
                {" "}
                <Route
                  path="/signup"
                  render={() => <Redirect to="/dashboard" />}
                />
                <Route
                  path="/login"
                  render={() => <Redirect to="/dashboard" />}
                />
                <Route
                  exact
                  path="/dashboard"
                  render={props => (
                    <ProfilePage
                      {...props}
                      queryItins={this.queryItins}
                      logout={this.logout}
                      newItinerary={this.newItinerary}
                      itineraries={this.state.itineraries}
                      dataLoaded={this.state.dataLoaded}
                    />
                  )}
                />
                <Route
                  path="/dashboard/itinerary/:id"
                  component={YourItinPage}
                />
                <Route
                  path="/dashboard/newitinerary"
                  render={props => (
                    <NewItin {...props} newItinerary={this.newItinerary} />
                  )}
                />
                <Route
                  exact
                  path="/dashboard"
                  render={props => (
                    <ItinList
                      {...props}
                      queryItins={this.queryItins}
                      itineraries={this.itineraries}
                      dataLoaded={this.dataLoaded}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>
        </Router>
      );
    } else if (this.state.isLoggedIn === "NO") {
      return (
        <Router>
          <div className="App">
            <div className="App Backdrop">
              <Switch>
                <Route
                  path="/login"
                  render={props => (
                    <Login {...props} login={this.login} logout={this.logout} />
                  )}
                />
                <Route
                  path="/signup"
                  render={props => (
                    <Signup {...props} register={this.register} />
                  )}
                />
                <Route path="/" render={() => <Redirect to="/login" />} />
              </Switch>
            </div>
          </div>
        </Router>
      );
    }
  }
}

export default App;
