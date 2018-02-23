import React, { Component } from "react";
import "../App.css";
import "../Delightful.css";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import Logo from "../Images/LOGO.png";
import Name from "../Images/Name-Logo.png";
import Cloud1 from "../Images/Background_Pieces_2-cloud1.png";
import Cloud2 from "../Images/Background_Pieces_2-cloud2.png";
import Cloud3 from "../Images/Background_Pieces_2-cloud3.png";
import RegisterForm from "./RegisterForm";
import TokenService from "../services/TokenService";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    console.log(`handling submit: ${data}`);
    this.props.register(data);
  }

  render() {
    return (
      <div>
        <div className="Cloud1">
          <img style={{ width: 1000 }} src={Cloud1} />
        </div>
        <div className="Cloud2">
          <img style={{ width: 1000 }} src={Cloud2} />
        </div>
        <div className="Cloud3">
          <img style={{ width: 1000 }} src={Cloud3} />
        </div>
        <div className="App">
          <div className="Logo">
            <img src={Logo} />
          </div>
          <div className="Name">
            <img src={Name} />
          </div>
          <div className="login signupform" style={{ left: 350 }}>
            <h3>Sign Up</h3>
            <RegisterForm submit={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
