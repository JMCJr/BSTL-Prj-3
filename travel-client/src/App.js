import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing";
import ProfilePage from "./Components/Profile/ProfilePage";
import Signup from './Components/Signup';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: false
		};
	}

	  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route 
            exact path="/login"
            render={() => {
              return (
              <Landing /> )
            }}
          />
          <Route 
            exact path="/signup"
            render={() => {
              return (
              <Signup /> )
            }}
          />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
