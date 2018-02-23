import React, { Component } from "react";
import "../App.css";
import "../Delightful.css";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";
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
      <div className="App">
        <div>
          <RegisterForm submit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default Signup;
