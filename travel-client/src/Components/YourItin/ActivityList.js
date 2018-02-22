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
      modalOpen: true
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
          <Modal
            open={modalOpen}
            onClose={this.modalHandler}
            closeIconSize={0}
            little
          >
            <NewActivity
              itinerary={this.props.itinerary}
              modalHandler={this.modalHandler}
              newActivityPost={this.props.newActivityPost}
            />
          </Modal>
        </div>
        <div className="Activity">
          <div className="Your-itinerary-card">
            <div className="Flex-horizontal">
              <span className="Your-itin-heading">
                <h2>Activity List</h2>
              </span>
              <span>
                <button onClick={this.modalHandler}>Open modal</button>
              </span>
            </div>
            <div className="Activity-container Flex-vertical">
              <div className="Sub-sub-headings">Vote</div>
              <div className="Activity-holder">{activities}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
