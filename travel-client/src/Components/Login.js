import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "../Delightful.css";
import ProfilePage from "./Profile/ProfilePage";
import LoginForm from "./LoginForm";
import axios from "axios";
import TokenService from "../services/TokenService";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    console.log(`handling submit: ${data}`);
    this.props.login(data);
  }

  render() {
    return (
      <div className="App Backdrop">
        <button className="signout" onClick={this.props.logout}>
          Sign out
        </button>
        <div className="login">
          <h3>LOGIN</h3>
          <LoginForm submit={this.onSubmit} />
          <br />
          <Link to="/signup">
            <p>Sign Up</p>
          </Link>
        </div>
      </div>
    );
  }
}
