import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";

import Nav from "../Nav";
import ItinList from "./ItinList";
import NewItin from "./NewItin";

export default class ProfilePage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Router>
				<div>
					<Nav />
					<Link to="/newitinerary">
						<div>CREATE NEW ITINERARY</div>
					</Link>
					<Switch>
						<Route exact path="/dashboard" component={ItinList} />
						<Route
							exact
							path="/newitinerary"
							component={NewItin}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}
