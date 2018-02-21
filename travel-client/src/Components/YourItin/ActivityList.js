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
    this.renderActivities = this.renderActivities.bind(this);
  }
  renderActivities(activity, index) {
    return (
      <Activity
        getActivities={this.getActivities}
        itineraryID={this.props.itinerary.id}
        activity={activity}
        index={index}
        key={index}
      />
    );
  }

  componentDidMount() {
    this.props.getActivities(this.props.itinerary.id);
  }
  render() {
    const activities = this.props.allActivities.map(this.renderActivities);
    return <div>{activities}</div>;
  }
}
