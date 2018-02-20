
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

export default class Activity extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const activity = this.props.activity;
    return (
      <div className="Activity-card">
        <p>Name: {activity.name}</p>
        <p>Description: {activity.description}</p>
        <p>Price: {activity.price}</p>        
      </div>
    );
  }
};
