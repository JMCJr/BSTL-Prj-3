import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import DropdownButt from "./DropdownButt";

export default class NavHeader extends Component {

  
    
    render(){
    return(
      <div>
      <Link to={'/dashboard'}><p>Profile Image</p></Link>
      <Link to={'/landing'}><p>Sign out</p></Link>
      <DropdownButt />

      </div>
    )
  }
}
