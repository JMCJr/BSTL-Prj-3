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

export default class ActivityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
    this.modalHandler = this.modalHandler.bind(this);
    this.renderActivities = this.renderActivities.bind(this);
    };
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

  getActivities(id) {
    axios({
      url: `http://localhost:8080/api/nowander/itinerary/${id}/activity`,
      method: "GET"
    }).then(response => {
      console.log(response);
      this.setState({
        allActivities: response.data.activities,
        dataLoaded: true
      });
    });
  }

  componentDidMount() {
    this.getActivities(this.props.itinerary.id);
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
