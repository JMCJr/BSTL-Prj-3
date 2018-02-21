import React, { Component } from "react";
import {
  BrowseRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import axios from "axios";
import Activity from "./Activity";
import NewActivity from "./NewActivity";
import Modal from "react-responsive-modal";

export default class ActivityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.renderActivities = this.renderActivities.bind(this);
    this.modalHandler = this.modalHandler.bind(this);
  }
  renderActivities(activity, index) {
    return (
      <Activity
        getActivities={this.getActivities}
        itineraryID={this.props.itinerary.id}
        activity={activity}
        index={index}
        key={index}
      />
    );
  }
  modalHandler() {
    this.setState(prevState => {
      prevState.modalOpen = !prevState.modalOpen;
      return prevState;
    });
  }
  componentDidMount() {
    this.props.getActivities(this.props.itinerary.id);
  }
  render() {
    const activities = this.props.allActivities.map(this.renderActivities);
    const { modalOpen } = this.state;
    return (
      <div>
        <div>
          <button onClick={this.modalHandler}>Open modal</button>
          <Modal
            open={modalOpen}
            onClose={this.modalHandler}
            closeIconSize={8}
            little
          >
            <NewActivity
              itinerary={this.props.itinerary}
              modalHandler={this.modalHandler}
              newActivityPost={this.props.newActivityPost}
            />
          </Modal>
        </div>
        <div>{activities}</div>
      </div>
    );
  }
}
