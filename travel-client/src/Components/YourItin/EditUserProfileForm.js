

import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";

class EditUserProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: this.props.match.params.id,  fname: "", lname: "", email: "", username:"", password_digest:"" };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value});
  }

  submitHandler(e) {
    e.preventDefault();
    console.log('in submitHandler')
    const data = this.state;
    console.log("in EditUserProfileForm, data is ", data);
    this.props.history.push('/users');
    this.props.EditUserProfileForm(data);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>first_Name
          <input onChange={this.changeHandler} type="text" name="first Name" />
        </label>
        <label>last_Name
          <input onChange={this.changeHandler} type="text" name="Last Name" />
        </label>
        <label>email
          <input onChange={this.changeHandler} type="text" name="email" />
        </label>
        <label>username
          <input onChange={this.changeHandler} type="text" name="username" />
        </label>
        <label>Password
          <input onChange={this.changeHandler} type="text" name="password" />
        </label>
        
          <input type="submit" value='submit' />
      </form>
      )
  }
}

export default EditUserProfileForm;