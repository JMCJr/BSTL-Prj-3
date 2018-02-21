import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Modal from "react-responsive-modal";
import NewActivity from "./NewActivity";

export default class YourItinInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.modalHandler = this.modalHandler.bind(this);
  }

  modalHandler() {
    this.setState(prevState => {
      prevState.modalOpen = !prevState.modalOpen;
      return prevState;
    });
  }

  render() {
    const itinerary = this.props.itinerary;
    const { modalOpen } = this.state;
    return (
      <div>
        <div className="Your-itinerary-card">
          <h2>{itinerary.name}</h2>
          <div>City: {itinerary.city}</div>
          <div>Departing: {itinerary.date_departing}</div>
          <div>Returning: {itinerary.date_returning}</div>
          <div>Budget: ${itinerary.budget}</div>
          <div className="Itin-edit-button">Edit Itinerary</div>
        </div>

        <div>
          <button onClick={this.modalHandler}>Open modal</button>
          <Modal
            open={modalOpen}
            onClose={this.modalHandler}
            closeIconSize={8}
            little
          >
            <NewActivity itinerary={itinerary} />
          </Modal>
        </div>
      </div>
    );
  }
}
