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
				<div className="login">
            <h3>LOGIN</h3>
            <form onSubmit="">
              <input
                type="text"
                name="email"
                placeholder="email"

              />
                <br />
              <input
                type="text"
                name="password"
                placeholder="password"

               />
                <br />
              <input
                type="submit"
              />
            </form>
            
				<Link to="/dashboard">
					<h1>ENTER</h1>
				</Link>
				<br/>
          <Link to="/signup">
            <p>Sign Up</p>
          </Link>
          </div>
			</div>
		);
	}
}
