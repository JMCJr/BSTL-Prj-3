import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./Delightful.css";

export default class UserInfo extends Component {
  render() {
    return (
      <div>
        <div className="profilePic" />
        <p>user name</p>
        <p>user email</p>
      </div>
    );
  }
}
