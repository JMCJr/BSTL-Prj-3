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

    this.deleteActivityHandler = this.deleteActivityHandler.bind(this);
  }

  modalHandler() {
    this.setState(prevState => {
      prevState.modalOpen = !prevState.modalOpen;
      return prevState;
    });
  }
  deleteActivityHandler(e) {
    e.preventDefault();
    console.log("DELETE ACTVITY HANDELR :", this.props.activity);
    this.props.deleteActivity(this.props.activity.id);
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
            <button className="Act-butts" onClick={this.deleteActivityHandler}>
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
