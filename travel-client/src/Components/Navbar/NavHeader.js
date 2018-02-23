import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import DropdownButt from "./DropdownButt";

export default class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.state = { menuIsOpen: false };
  }
  handleOpenMenu(e) {
    e.preventDefault();
    this.setState(prevState => {
      const nextState = { menuIsOpen: !prevState.menuIsOpen };
      return nextState;
    });
  }

  render() {
    let maybeMenuOpen = null;
    if (this.state.menuIsOpen) {
      maybeMenuOpen = (
        <div className="itineraryDropdown">
          <DropdownButt />
        </div>
      );
    }
    return (
      <div className="navEntire">
        <Link to={"/dashboard"}>
          <p className="profileIMG">Profile Image</p>
        </Link>

        <button className="signoutButton" onClick={this.props.logout}>
          Sign out
        </button>
        <button
          className="dropMenu"
          type="submit"
          name="show itinerary"
          onClick={this.handleOpenMenu}
        >
          Show My Itineraries
        </button>

        {maybeMenuOpen}
      </div>
    );
  }
}
