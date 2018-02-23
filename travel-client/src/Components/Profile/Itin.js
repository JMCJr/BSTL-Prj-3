import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import "../../Delightful.css";
import axios from "axios";

export default class Itin extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const itinerary = this.props.itinerary;
		return (
			<div className="Itinerary-card">
				<div className="Flex-vertical">
					<div className="Flex-horizontal Flex-space-around">
						<div>
							<span className="Itin-category-styling">Trip:</span>
							<Link to={`/dashboard/itinerary/${itinerary.id}`}>
								<span className="Itin-value-styling">{itinerary.name}</span>
							</Link>
						</div>
						<div>
							<span className="Itin-category-styling">Destination:</span>
							<span className="Itin-value-styling">{itinerary.city}</span>
						</div>
					</div>
					<div className="Flex-horizontal Flex-space-around">
						<div>
							<span className="Itin-category-styling">Departing: </span>
							<span className="Itin-value-styling">
								{itinerary.date_departing}
							</span>
						</div>
						<div>
							<span className="Itin-category-styling">Returning: </span>
							<span className="Itin-value-styling">
								{itinerary.date_returning}
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
