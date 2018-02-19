import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import MenuItem from "./MenuItem";

export default class DropdownButt extends Component {
  constructor(props) {
    super(props);
    this.itinListItem = this.itinListItem.bind(this);
  }

  itinListItem(itinDatum, index) {
    return (
      <MenuItem
        itinDatum={itinDatum}
        index={index}
        queryItin={this.props.queryItin}
      />
    );
  }

  render() {
    console.log("in ItinList render. this.state:", this.state);
  
    const itin = this.props.itin.map(this.itinListItem);
    console.log('ONE Itinerary from list:', itin);
    return (
      <div>
          <div>{itin}</div>
      </div>

    );
  }
}
