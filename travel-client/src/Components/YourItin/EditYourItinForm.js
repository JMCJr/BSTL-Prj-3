import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import "../../Delightful.css";

class EditYourItinForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: "",
      city: "",
      departure_date: Number,
      date_returning: "",
      budget: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    console.log("in submitHandler");
    const data = this.state;
    console.log("in EditYourItinForm, data is ", data);
    this.props.history.push("/itinerary");
    this.props.EditYourItinForm(data);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>
          Name
          <input onChange={this.changeHandler} type="text" name="name" />
        </label>
        <label>
          City
          <input onChange={this.changeHandler} type="text" name="City" />
        </label>
        <label>
          date_departing
          <input
            onChange={this.changeHandler}
            type="text"
            name="departure date"
          />
        </label>
        <label>
          date_returning
          <input onChange={this.changeHandler} type="text" name="Return date" />
        </label>

        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default EditYourItinForm;
