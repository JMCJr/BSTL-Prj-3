import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import axios from "axios";
import "../../Delightful.css";
import Itin from "./Itin";

export default class ItinList extends Component {
	constructor(props) {
		super(props);
		this.renderItineraries = this.renderItineraries.bind(this);

		this.state = {
			dataLoaded: false
		};
	}
	renderItineraries(itinerary, index) {
		return <Itin itinerary={itinerary} index={index} key={index} />;
	}

	componentDidMount() {
		this.props.queryItins();
		console.log("ITINLIST-- -componentDidMount");
	}
	render() {
		if (!this.props.dataLoaded) {
			return "Your page is wandering over now";
		}
		const itineraries = this.props.itineraries.map(this.renderItineraries);
		return (
			<div className="Overflow Centered-True Itinerary-box">
				<div className="Itin-container Flex-vertical">{itineraries}</div>
			</div>
		);
	}
}
