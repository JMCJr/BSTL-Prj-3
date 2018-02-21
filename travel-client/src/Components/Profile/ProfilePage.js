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
		this.state = {
			id: ""
		};
	}

	render() {
		return (
			<Router>
				<div>
					<NavHeader logout={this.props.logout} />
					<Link to="/newitinerary">
						<div>CREATE NEW ITINERARY</div>
					</Link>
					<Switch>
						<Route
							path="/dashboard/itinerary/:id"
							component={YourItinPage}
						/>
						<Route exact path="/newitinerary" component={NewItin} />
						<Route exact path="/dashboard" component={ItinList} />
					</Switch>
				</div>
			</Router>
		);
	}
}
