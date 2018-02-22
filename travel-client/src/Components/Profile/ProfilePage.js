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

	render() {
		return (
			<Router>
				<div>
					<NavHeader logout={this.props.logout} />
					<Link to="/dashboard/newitinerary">
						<button className="createNewItinButt">Make A New Itinerary</button>
					</Link>
					<Switch>
						<Route path="/dashboard/itinerary/:id" component={YourItinPage} />

						<Route
							path="/dashboard/newitinerary"
							render={props => (
								<NewItin {...props} newItinerary={this.props.newItinerary} />
							)}
						/>
						<Route exact path="/dashboard" component={ItinList} />
					</Switch>
				</div>
			</Router>
		);
	}
}
