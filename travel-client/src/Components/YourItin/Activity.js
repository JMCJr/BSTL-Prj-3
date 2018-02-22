import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import axios from "axios";

export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.deleteActivity = this.deleteActivity.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }
  deleteActivity(id) {
    axios({
      url: `http://localhost:8080/api/noWander/itinerary/${id}/activity`,
      method: "DELETE"
    }).then(response => {
      console.log(response);
    });
  }

  deleteHandler(e) {
    e.preventDefault();
    this.deleteActivity(this.props.itineraryID);
  }
  render() {
    const activity = this.props.activity;
    return (
      <div>
        <div className="Activity-box">
          <div>voting thing</div>
          <div className="Flex-vertical Category-spacing">
            <div className="Activity-squares">Activity: </div>
            <div className="Activity-squares">{activity.name}</div>
          </div>

          <div className="Flex-vertical Category-spacing">
            <div className="Activity-squares">Description:</div>
            <div className="Activity-squares">{activity.description}</div>
          </div>
          <div className="Flex-vertical Category-spacing">
            <div className="Activity-squares">Cost:</div>
            <div className="Activity-squares">{activity.price}</div>
          </div>
          <button onClick={this.deleteHandler}>Delete</button>
        </div>
      </div>
    );
  }
}
