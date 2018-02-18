import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  render() {
    return (
      
        <div className="App">
          <h1>No Wander</h1>
          <div>
            <h3>Sign Up</h3>
            <form onSubmit="">
              <input
                type="text"
                name="first name"
                placeholder="first name"

              />
              <input
                type="text"
                name="last name"
                placeholder="last name"
                
              />
                <br />
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
          </div>
      </div>
    );
  }
}

export default Signup;