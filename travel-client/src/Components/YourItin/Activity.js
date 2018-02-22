import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import axios from "axios";
import Modal from "react-responsive-modal";
import EditYourActivityForm from "./EditYourActivityForm";

export default class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.modalHandler = this.modalHandler.bind(this);

    this.deleteActivity = this.deleteActivity.bind(this);
  }
  deleteActivity(e) {
    e.preventDefault();
    axios({
      url: `http://localhost:8080/api/noWander/itinerary/${
        this.props.activity.id
      }/activity`,
      method: "DELETE"
    }).then(response => {
      console.log(response);
      this.props.getActivities(this.props.itineraryID);
    });
  }
  modalHandler() {
    this.setState(prevState => {
      prevState.modalOpen = !prevState.modalOpen;
      return prevState;
    });
  }

  render() {
    const activity = this.props.activity;
    const { modalOpen } = this.state;
    return (
      <div>
        <div className="Activity-box">
          <div>
            <form>
              <input type="radio" name="vote" />
            </form>
          </div>
          <div className="Flex-vertical Category-spacing">
            <div className="Activity-squares">{activity.name}</div>
          </div>

          <div className="Flex-vertical Category-spacing">
            <div className="Activity-squares">{activity.description}</div>
          </div>
          <div className="Flex-vertical Category-spacing">
            <div className="Activity-squares">{activity.price}</div>
          </div>
          <div>
            <button className="Act-butts" onClick={this.modalHandler}>
              Edit
            </button>
            <button className="Act-butts" onClick={this.deleteActivity}>
              Delete
            </button>
          </div>
          <Modal
            open={modalOpen}
            onClose={this.modalHandler}
            closeIconSize={0}
            little
          >
            <EditYourActivityForm
              itineraryId={this.props.itineraryID}
              modalHandler={this.modalHandler}
              activity={activity}
              editActivity={this.props.editActivity}
            />
          </Modal>
        </div>
      </div>
    );
  }
}
