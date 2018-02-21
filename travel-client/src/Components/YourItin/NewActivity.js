import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import axios from "axios";

export default class NewActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: "",
      votes: 0,
      itinerary_id: props.itinerary.id
    };
  }
  changeActivity(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }
  createCall(newActivity) {
    axios({
      url: "http://localhost:8080/api/nowander/itinerary/:id",
      method: "POST",
      data: newActivity
    }).then(res => {
      console.log(res);
    });
  }
  submitActivity(ev) {
    ev.preventDefault();
    console.log(ev);
    this.createCall(this.state);
  }

  render() {
    return (
      <form onSubmit={this.submitActivity.bind(this)}>
        <h1>NewActivity</h1>
        <label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
            onChange={this.changeActivity.bind(this)}
          />
        </label>
        <label>
          <br />
          <input
            type="text"
            name="description"
            value={this.state.description}
            placeholder="description"
            onChange={this.changeActivity.bind(this)}
          />
        </label>
        <label>
          <br />
          <input
            type="text"
            name="price"
            value={this.state.price}
            placeholder="price"
            onChange={this.changeActivity.bind(this)}
          />
        </label>
        <input type="submit" />
        <div className="Hidden">
          <label>
            <br />
            <input
              type="text"
              name="votes"
              value={this.state.votes}
              placeholder="votes"
              onChange={this.changeActivity.bind(this)}
            />
          </label>
          <label>
            <br />
            <input
              type="text"
              name="itinerary_id"
              value={this.state.itinerary_id}
              placeholder="itinerary_id"
              onChange={this.changeActivity.bind(this)}
            />
          </label>
        </div>
      </form>
    );
  }
}
