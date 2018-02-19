import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import ProfilePage from "./Profile/ProfilePage";
import axios from 'axios';

export default class Login extends Component {

constructor(props) {
    super(props);

    this.state = {
      email: ""
      // password: "",
    };
    
    this.submitLogin = this.submitLogin.bind(this);
  }

submitLogin(e) {
    e.preventDefault();
    axios({
      url: "http://localhost:8080/api/nowander/dashboard",
      method: "GET",
      data: this.state
    }).then(response => {
      console.log("post successful, response.data:", response.data);
      this.props.queryItins();
      this.props.history.push("/dashboard/user");
    });
  }

  render() {
    return (
      <div className="App Backdrop">
        <div className="login">
            <h3>LOGIN</h3>
            <form onSubmit={this.submitLogin}>
              <input
                type="text"
                name="email"
                placeholder="email"

              />
                <br />
              <input
                type="text"
                name="password"
                placeholder="password"

               />
                <br />
              <input
                type="submit"
              />
            </form>
            
        <Link to="/dashboard">
          <h1>ENTER</h1>
        </Link>
        <br/>
          <Link to="/signup">
            <p>Sign Up</p>
          </Link>
          </div>
      </div>
    );
  }
}
