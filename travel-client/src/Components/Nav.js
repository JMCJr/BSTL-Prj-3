import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import ProfilePage from "./Profile/ProfilePage";
import DropdownButt from "./Navbar/DropdownButt";

export default class Nav extends Component {

  render() {
    return (
      <div>
        <Link to="/dashboard">HOME</Link>
        <DropdownButt />
          
      </div>

    );
  }
}
