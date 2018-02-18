import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Login from "./Login";
import ProfilePage from "./Profile/ProfilePage";
import CreateItin from "./Profile/CreateItin";

export default class Landing extends Component {
	render() {
		return (
			<div className="App Backdrop">
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/dashboard" component={ProfilePage} />
				</Switch>
			</div>
		);
	}
}
