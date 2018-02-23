import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "../../Delightful.css";

export default class YourItinInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const itinerary = this.props.itinerary;

    return (
      <div className="Your-itin">
        <div className="Your-itinerary-card">
          <span className="Your-itin-heading">
            <h2>{itinerary.name}</h2>
          </span>
          <div className="Flex-horizontal Flex-space-around">
            <div className="Flex-vertical  Your-itin-outter">
              <div className="Your-itinerary-card-box Your-itin-top">
                <div className="Sub-sub-headings">To:</div>
                <div>{itinerary.city}</div>
              </div>
              <div className="Your-itinerary-card-box">
                <div>activity count</div>
                <div>{this.props.activityCount}</div>
              </div>
            </div>
            <div className="Flex-vertical Your-itin-inner">
              <div className="Your-itinerary-card-box Your-itin-top">
                <div className="Sub-sub-headings">Dates:</div>
                <div>{itinerary.date_departing}</div>
                <div className="Sub-sub-headings">To: </div>
                <div>{itinerary.date_returning}</div>
              </div>
              <div className="Your-itinerary-card-box">
                <div>Budget: ${itinerary.budget}</div>
              </div>
            </div>
            <div className="Your-itinerary-card-box Your-itin-outter">
              TRAVELERS
            </div>
          </div>
        </div>
      </div>
    );
  }
}
