import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";


export default class Itin extends Component {
  render() {
    const itinerary = this.props.itinerary;
    return (
      <div className="Itinerary-card">
        <p>Name:{itinerary.name}</p>
        <p>Description:{itinerary.description}</p>
        <p>City: {itinerary.city}</p>

        <p>Budget: ${itinerary.budget.toFixed(2)}</p>
      </div>
    );
  }
}
