import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import Itin from "./Itin";

export default class ItinList extends Component {
	constructor(props) {
		super(props);
		this.getItins = this.getItins.bind(this);
		this.renderItineraries = this.renderItineraries.bind(this);

		this.state = {
			allItineraries: [],
			dataLoaded: false
		};
	}
	renderItineraries(itinerary, index) {
		return <Itin itinerary={itinerary} index={index} key={index} />;
	}

	getItins() {
		axios({
			url: "http://localhost:8080/api/nowander/dashboard",
			method: "GET"
		}).then(response => {
			console.log("in ProfilePage : ", response.data.itineraries);
			this.setState({
				allItineraries: response.data.itineraries,
				dataLoaded: true
			});
		});
	}
	componentDidMount() {
		this.getItins();
	}
	render() {
		if (!this.state.dataLoaded) {
			return "PAGE LOADINGGGG";
		}
		const itineraries = this.state.allItineraries.map(
			this.renderItineraries
		);
		return <div>{itineraries}</div>;
	}
}
