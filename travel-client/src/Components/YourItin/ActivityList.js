import React, { Component } from "react";
import {
  BrowseRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import axios from "axios";
import "../../Delightful.css";
import Activity from "./Activity";
import NewActivity from "./NewActivity";
import Modal from "react-responsive-modal";
import addIcon from "../../Icons/ICONS-4-add.png";

export default class ActivityList extends Component {
  constructor(props) {
    super(props);
    this.renderActivities = this.renderActivities.bind(this);
    this.modalHandler = this.modalHandler.bind(this);
    this.state = {
      modalOpen: false
    };
  }

  renderActivities(activity, index) {
    return (
      <Activity
        deleteActivity={this.props.deleteActivity}
        getActivities={this.props.getActivities}
        itineraryID={this.props.itinerary.id}
        activity={activity}
        index={index}
        key={index}
        editActivity={this.props.editActivity}
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
                <div
                  onClick={this.modalHandler}
                  className="Add-activity-button"
                />
              </span>
            </div>
            <div className="Activity-container">
              <div className="Flex-horizontal Active-Headbar">
                <div className="Sub-sub-headings Vote-Head">Vote</div>
                <div className="Sub-sub-headings Act-Head">Activity</div>
                <div className="Sub-sub-headings Desc-Head">Description</div>
                <div className="Sub-sub-headings Cost-Head">Cost</div>
              </div>
              <div className="Activity-holder">{activities}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
