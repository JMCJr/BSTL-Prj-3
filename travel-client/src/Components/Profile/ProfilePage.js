import React, { Component } from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import NavHeader from "../Navbar/NavHeader";
import ItinList from "./ItinList";
import NewItin from "./NewItin";
import YourItinPage from "../YourItin/YourItinPage";

=======
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
	Redirect
} from "react-router-dom";

import Nav from "../Nav";

import NewItin from "./NewItin";
import YourItinPage from "../YourItin/YourItinPage";
import UserInfo from "./UserInfo";
>>>>>>> 63876702ca7613bb94aa599174b78baf37957085

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
					<NavHeader />
					<Link to="/newitinerary">
						<div>CREATE NEW ITINERARY</div>
					</Link>
					<Switch>
<<<<<<< HEAD
						<Route exact path="/itinerary/:id" component={YourItinPage} />
						<Route exact path="/newitinerary" component={NewItin} />
						<Route exact path="/dashboard" component={ItinList} />
=======
						<Route exact path="/dashboard" component={UserInfo} />
						<Route exact path="/newitinerary" component={NewItin} />
						<Route path="/itinerary/:id" component={YourItinPage} />
>>>>>>> 63876702ca7613bb94aa599174b78baf37957085
					</Switch>
				</div>
			</Router>
		);
	}
}
