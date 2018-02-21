import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import ProfilePage from "./Profile/ProfilePage";

export default class Landing extends Component {
	render() {
		return (
			<div className="App Backdrop">
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/login" />} />
					<Route
						path="/login"
						render={props => <Login {...props} login={this.props.login} />}
					/>
					<Route
						path="/signup"
						render={props => (
							<Signup {...props} register={this.props.register} />
						)}
					/>
					<Route
						path="/dashboard"
						render={props => (
							<ProfilePage {...props} logout={this.props.logout} />
						)}
					/>
				</Switch>
			</div>
		);
	}
}
