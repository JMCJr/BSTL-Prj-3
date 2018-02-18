import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import ProfilePage from "./Profile/ProfilePage";

export default class Login extends Component {
	render() {
		return (
			<div className="App Backdrop">
				<form>
					<div>
						<div>
							<input
								id="email"
								type="text"
								name="user[email]"
								placeholder="email"
							/>
							<br />
							<input
								id="password"
								type="password"
								name="user[password]"
								placeholder="password"
							/>
							<br />
						</div>
					</div>
				</form>
				<Link to="/dashboard">
					<h1>ENTER</h1>
				</Link>
			</div>
		);
	}
}
