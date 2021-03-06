import React, { Component } from "react";
import "../Delightful.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      fname: "",
      lname: "",
      username: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // preventDefault and lift state back up to the parent
  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  // update form state
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="Signup">
        <form onSubmit={this.handleSubmit}>
          <h3 className="Signup-title">Sign Up</h3>
          <div className="Flex-vertical ">
            <input
              className="New-activity-input"
              type="text"
              name="fname"
              value={this.state.fname}
              placeholder="first name"
              onChange={this.handleChange}
            />
            <input
              className="New-activity-input"
              type="text"
              name="lname"
              value={this.state.lname}
              placeholder="last name"
              onChange={this.handleChange}
            />
            <br />
            <input
              className="New-activity-input"
              type="text"
              name="username"
              value={this.state.username}
              placeholder="username"
              onChange={this.handleChange}
            />
            <input
              className="New-activity-input"
              type="text"
              name="email"
              value={this.state.email}
              placeholder="email"
              onChange={this.handleChange}
            />
            <br />
            <input
              className="New-activity-input"
              type="text"
              name="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChange}
            />
            <br />
            <input className="Signup-submit" type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
