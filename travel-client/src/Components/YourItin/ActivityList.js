
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
    this.renderActivities = this.renderActivities.bind(this);
    this.state = {
      allActivities: [],
      dataLoaded: false
    };
  }
  renderActivities(activity, index) {
    return <Activity activity={activity} index={index} key={index} />;
  }

  getActivities(id) {
    axios({
      url: `http://localhost:8080/api/nowander/itinerary/${id}/activity`,
      method: "GET"
    }).then(response => {
      console.log(response);
      this.setState({
        allActivities: response.data.activities,
        dataLoaded: true
      });
    });
  }

  componentDidMount() {
    this.getActivities(this.props.itinerary.id);
  }
  render() {
    if (!this.state.dataLoaded) {
      return "PAGE LOADINGGG";
    }
 

    const activities = this.state.allActivities.map(this.renderActivities);
    return <div>{activities}</div>;
  }
}

