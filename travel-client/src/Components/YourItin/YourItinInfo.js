import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";



export default class YourItinInfo extends Component {
  render() {
    const itinerary = this.props.itinerary;
    return (
      <div className="Itinerary-card">
        <p>Name: {itinerary.name}</p>
        <p>City: {itinerary.city}</p>
        <p>Departing: {itinerary.date_departing}</p>
        <p>Returning: {itinerary.date_returning}</p>
        <p>Budget: ${itinerary.budget}</p>
      </div>
    );
  }
}