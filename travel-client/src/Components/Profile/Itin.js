import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";


export default class Itin extends Component {
	constructor(props){
		super(props);
	}
	render() {
		const itinerary = this.props.itinerary;
		return (
			<div className="Itinerary-card">
				<p>Name: {itinerary.name}</p>
				<p>City: {itinerary.city}</p>
				<p>Departing: {itinerary.date_departing}</p>
				<p>Returning: {itinerary.date_returning}</p> 
				<p>Budget: ${itinerary.budget.toFixed(2)}</p>
				<Link to={`/itinerary/${itinerary.id}`}>
					<h4>More Details</h4>
					</Link>

			</div>
		);
	}
}
