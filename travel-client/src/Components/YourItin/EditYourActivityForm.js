import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";

class EditYourActivityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.activity.name,
      description: props.activity.description,
      price: props.activity.price,
      votes: 0,
      itinerary_id: props.activity.itinerary_id,
      activityId: props.activity.id
    };
  }
  changeActivity(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }
  c;
  submitActivity(ev) {
    ev.preventDefault();
    console.log(ev);
    this.props.editActivity(this.state);
    this.props.modalHandler();
    //closes modal and re-renders the page
  }

  render() {
    return (
      <form onSubmit={this.submitActivity.bind(this)}>
        <div className="Flex-vertical New-activity">
          <h3>Edit Activity Suggestion</h3>
          <label>
            <br />
            <input
              className="New-activity-input"
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Activity Name"
              onChange={this.changeActivity.bind(this)}
            />
          </label>
          <label>
            <br />
            <textarea
              className="New-activity-input"
              type="text"
              name="description"
              value={this.state.description}
              placeholder="Short Description"
              onChange={this.changeActivity.bind(this)}
            />
          </label>
          <label>
            <br />
            <input
              className="New-activity-input"
              type="text"
              name="price"
              value={this.state.price}
              placeholder="Cost"
              onChange={this.changeActivity.bind(this)}
            />
          </label>
          <input type="submit" className="New-activity-submit" />
          <div className="Hidden">
            <label>
              <br />
              <input
                className="New-activity-input"
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
        </div>
      </form>
    );
  }
}

export default EditYourActivityForm;
