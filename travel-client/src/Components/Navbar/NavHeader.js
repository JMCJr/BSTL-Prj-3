import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import DropdownButt from "./DropdownButt";

export default class NavHeader extends Component {
  render() {
    return (
      <div className="navWhole">
        <Link to={"/dashboard"}>
          <p className="profileIMG">Profile Image</p>
        </Link>
        <button to={"/landing"}>
          <p className="signout" onClick={this.props.logout}>
            Sign out
          </p>
        </button>
        <div />
        <DropdownButt className="dropWhole" />
      </div>
    );
  }
}
