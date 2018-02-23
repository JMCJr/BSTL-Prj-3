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

export default class NewItin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			city: "",
			date_departing: "",
			date_returning: "",
			budget: "",
			reDirect: false
		};
		this.submitItinerary = this.submitItinerary.bind(this);
	}

	changeItinerary(ev) {
		this.setState({
			[ev.target.name]: ev.target.value
		});
	}

	submitItinerary(ev) {
		ev.preventDefault();
		console.log(ev);
		this.props.newItinerary(this.state);
		this.setState({ reDirect: true });
	}

	render() {
		return (
			<div className="Your-itinerary-card">
				{" "}
				<form onSubmit={this.submitItinerary.bind(this)}>
					<span className="New-itinerary-heading">
						<h2>Create New Itinerary</h2>
					</span>
					<div className="Your-itinerary-card-box">
						<div className="New-itin-container">
							<div className="Flex-vertical Grid-col-2">
								<input
									className="New-itinerary-input"
									type="text"
									name="name"
									value={this.state.name}
									placeholder="Trip Name"
									onChange={this.changeItinerary.bind(this)}
								/>

								<div className="New-dates">
									<input
										className="New-itinerary-input "
										type="text"
										name="date_departing"
										value={this.state.date_departing}
										placeholder="Departing"
										onChange={this.changeItinerary.bind(this)}
									/>
									<div />
									<input
										className="New-itinerary-input "
										type="text"
										name="date_returning"
										value={this.state.date_returning}
										placeholder="Returning"
										onChange={this.changeItinerary.bind(this)}
									/>
								</div>
							</div>
							<div className="Flex-vertical Grid-col-4">
								<input
									className="New-itinerary-input"
									type="text"
									name="city"
									value={this.state.city}
									placeholder="Destination"
									onChange={this.changeItinerary.bind(this)}
								/>

								<input
									className="New-itinerary-input"
									type="text"
									name="budget"
									value={this.state.budget}
									placeholder="Budget"
									onChange={this.changeItinerary.bind(this)}
								/>
							</div>
						</div>
					</div>
					<input className="New-itinerary-submit" type="submit" />
				</form>
				{this.state.reDirect && <Redirect to={"/dashboard"} />}
			</div>
		);
	}
}
