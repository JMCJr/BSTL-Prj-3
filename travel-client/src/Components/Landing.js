import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import ProfilePage from "./Profile/ProfilePage";
import CreateItin from "./Profile/CreateItin";

export default class Landing extends Component {
	render() {
		return (
			<div className="App Backdrop">
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/login" />} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route path="/dashboard" component={ProfilePage} />
				</Switch>
			</div>
		);
	}
}