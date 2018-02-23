import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import NavHeader from "../Navbar/NavHeader";
import ItinList from "./ItinList";
import NewItin from "./NewItin";
import YourItinPage from "../YourItin/YourItinPage";

export default class ProfilePage extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log("ProfilePage mount");
	}
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route path="/dashboard/itinerary/:id" component={YourItinPage} />

						<Route
							path="/dashboard/newitinerary"
							render={props => (
								<NewItin {...props} newItinerary={this.props.newItinerary} />
							)}
						/>
						<Route
							exact
							path="/dashboard"
							render={props => (
								<ItinList
									{...props}
									queryItins={this.props.queryItins}
									itineraries={this.props.itineraries}
									dataLoaded={this.props.dataLoaded}
								/>
							)}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}
