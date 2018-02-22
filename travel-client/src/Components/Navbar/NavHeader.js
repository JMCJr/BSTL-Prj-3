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
          
          <div className="signoutButton" >
            <button  to={"/landing"}>
              <p onClick={this.props.logout}>
                Sign out
              </p>
            </button>
           </div>
          <div className="dropMenu">
            <button type="submit" name="show itinerary" onClick={this.handleOpenMenu} >Show my itinerary </button>
            {maybeMenuOpen}
          </div> 

          <div className="profilePic">
            <Link to={"/dashboard"}>
              <p>Profile Image</p>
            </Link>
          </div>

          
        </div>
      
    );
  }
}
