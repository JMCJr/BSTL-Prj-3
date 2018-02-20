// import React, { Component } from "react";
// import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
// import axios from "axios";

// export default class CreateItin extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			name: "",
// 			city: "",
// 			date_departing: "",
// 			date_returning: "",
// 			budget: ""
// 		};
// 	}

// 	changeItinerary(ev) {
// 		this.setState({
// 			[ev.target.name]: ev.target.value
// 		});
// 	}
// 	createCall(newItinerary) {
// 		axios({
// 			url: "http://localhost:8080/api/nowander/dashboard",
// 			method: "POST",
// 			data: newItinerary
// 		}).then(res => {
// 			console.log(res);
// 		});
// 	}
// 	submitItinerary(ev) {
// 		ev.preventDefault();
// 		console.log(ev);
// 		this.createCall(this.state);
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>CREATE NEW</h1>
// 				<form onSubmit={this.submitItinerary.bind(this)}>
// 					<label>
// 						<br />
// 						<input
// 							type="text"
// 							name="name"
// 							value={this.state.name}
// 							placeholder="name"
// 							onChange={this.changeItinerary.bind(this)}
// 						/>
// 					</label>
// 					<label>
// 						<br />
// 						<input
// 							type="text"
// 							name="city"
// 							value={this.state.city}
// 							placeholder="city"
// 							onChange={this.changeItinerary.bind(this)}
// 						/>
// 					</label>
// 					<label>
// 						<br />
// 						<input
// 							type="text"
// 							name="date_departing"
// 							value={this.state.date_departing}
// 							placeholder="departing"
// 							onChange={this.changeItinerary.bind(this)}
// 						/>
// 					</label>
// 					<label>
// 						<br />
// 						<input
// 							type="text"
// 							name="date_returning"
// 							value={this.state.date_returning}
// 							placeholder="returning"
// 							onChange={this.changeItinerary.bind(this)}
// 						/>
// 					</label>
// 					<label>
// 						<br />
// 						<input
// 							type="text"
// 							name="budget"
// 							value={this.state.budget}
// 							placeholder="budget"
// 							onChange={this.changeItinerary.bind(this)}
// 						/>
// 					</label>
// 					<input type="submit" />
// 				</form>
// 			</div>
// 		);
// 	}
// }
