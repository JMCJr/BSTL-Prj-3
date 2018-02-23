import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import MenuItem from "./MenuItem";
import "../../Delightful.css";
import "../../App.css";
import axios from "axios";

export default class DropdownButt extends Component {
  constructor(props) {
    super(props);
    this.getItins = this.getItins.bind(this);
    this.renderItineraries = this.renderItineraries.bind(this);

    this.state = {
      allItineraries: [],
      dataLoaded: false
    };
  }

  renderItineraries(itinerary, index) {
    return <MenuItem itinerary={itinerary} key={index} />;
  }

  getItins(id) {
    axios({
      url: `http://localhost:8080/api/nowander/dashboard/user/${id}`,
      method: "GET"
    }).then(response => {
      console.log("in ProfilePage : ", response.data.itineraries);
      this.setState({
        allItineraries: response.data.itineraries,
        dataLoaded: true
      });
    });
  }
  componentDidMount() {
    this.getItins(this.props.user.id);
  }

  render() {
    if (!this.state.dataLoaded) {
      return "PAGE LOADING";
    }
    const itineraries = this.state.allItineraries.map(this.renderItineraries);
    return (
      <div className="menuDropBackground Your-itinerary-card-box">
        {itineraries}
      </div>
    );
  }
}
