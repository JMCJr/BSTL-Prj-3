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
        <div className="dropWhole">
          <DropdownButt />
        </div>
      );
    }
    return (
      <div className="navWhole">
        <Link to={"/dashboard"}>
          <p className="profileIMG">Profile Image</p>
        </Link>

        <button className="signout" onClick={this.props.logout}>
          Sign out
        </button>

        <button onClick={this.handleOpenMenu} />
        {maybeMenuOpen}
      </div>
    );
  }
}
