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
          itinerary info
          <p>Name: {itinerary.name}</p>
          <p>City: {itinerary.city}</p>
          <p>Departing: {itinerary.date_departing}</p>
          <p>Returning: {itinerary.date_returning}</p>
          <p>Budget: ${itinerary.budget}</p>
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
