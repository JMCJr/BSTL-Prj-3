import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "../Delightful.css";
import Logo from "../Images/LOGO.png";
import Name from "../Images/Name-Logo.png";
import Cloud1 from "../Images/Background_Pieces_2-cloud1.png";
import Cloud2 from "../Images/Background_Pieces_2-cloud2.png";
import Cloud3 from "../Images/Background_Pieces_2-cloud3.png";
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
        <div className="Cloud1">
          <img style={{ width: 1000 }} src={Cloud1} />
        </div>
        <div className="Cloud2">
          <img style={{ width: 1000 }} src={Cloud2} />
        </div>
        <div className="Cloud3">
          <img style={{ width: 1000 }} src={Cloud3} />
        </div>
        <div className="Logo">
          <img src={Logo} />
        </div>
        <div className="Name">
          <img src={Name} />
        </div>
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
