import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "../../Delightful.css";
import axios from "axios";

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itinerary: "",
      dataLoaded: false
    };
    this.getItinerary = this.getItinerary.bind(this);
  }

  getItinerary(id) {
    axios({
      url: `/api/nowander/itinerary/${id}`,
      method: "GET"
    }).then(response => {
      console.log("in YourItinPage: ", response.data);
      this.setState({
        dataLoaded: true,
        itinerary: response.data
      });
    });
  }

  enableLink(e) {
    e.preventDefault();
  }

  render() {
    const itinerary = this.props.itinerary;
    return (
      <div>
        <Link to={`/dashboard/itinerary/${itinerary.id}`}>
          <p className="menuDropItem">Name: {itinerary.name}</p>
        </Link>
      </div>
    );
  }
}
