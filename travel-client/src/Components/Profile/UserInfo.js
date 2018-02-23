import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./Delightful.css";
import ItinList from "./ItinList";
import UserCard from "./UserCard";
import axios from "axios";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }
  render() {
    return (
      <div>
        <UserCard />
        <ItinList />
      </div>
    );
  }
}
