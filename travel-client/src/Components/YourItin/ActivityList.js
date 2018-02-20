
import React, { Component } from "react";
import {
  BrowseRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import axios from "axios";
import Activity from "./Activity";

export default class ActivityList extends Component {
  constructor(props) {
    super(props);
    this.getActivities = this.getActivities.bind(this);
    this.state = {
      allActivities: [],
      dataLoaded: false
    };
  }
  renderActivities(activity, index) {
    return <Itin activity={activity} index={index} key={index} />;
  }

  getActivities() {
    axios({
      url: `http://localhost:8080/api/nowander/itinerary/${id}`,
      method: "GET"
    }).then(response => {
      this.state({
        allActivities: response.data.activities,
        dataLoaded: true
      });
    });
  }

  componentDidMount() {
    this.getActivities();
  }
  render() {
    if (!this.state.dataLoaded) {
      return "PAGE LOADINGGG";
    }
    const activities = this.state.allActivities.map(this.renderActivities);
    return <div>{activities}</div>;
  }
}

