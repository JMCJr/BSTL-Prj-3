import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "../../Delightful.css";
import "../../Images/user-profile-pics_4.png";
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
          <DropdownButt user={this.props.user} />
        </div>
      );
    }
    return (
      <div className="navEntire">
        <div>
          <Link to={"/login"}>
            <div className="profileIMG" />
          </Link>
          <div>
            {this.props.user.fname} {this.props.user.lname}
          </div>
        </div>
        <div className="signoutButton" onClick={this.props.logout}>
          Sign out
        </div>

        <div
          className="dropMenu"
          type="submit"
          name="show itinerary"
          onClick={this.handleOpenMenu}
        >
          Itineraries
        </div>
        {maybeMenuOpen}
      </div>
    );
  }
}
