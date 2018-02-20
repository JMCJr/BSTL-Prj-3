import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";

import Nav from "../Nav";
import ItinList from "./ItinList";
import NewItin from "./NewItin";
import YourItinPage from '../YourItin/YourItinPage'

export default class ProfilePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id:""
		};
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
						<Route path="/itinerary/:id" component={YourItinPage}/>
					</Switch>
				</div>
			</Router>
		);
	}
}
