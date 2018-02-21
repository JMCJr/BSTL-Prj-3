import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";

class EditYourActivityForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: this.props.match.params.id,  name: "", description: "", price: Number, votes:"" };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value});
  }

  submitHandler(e) {
    e.preventDefault();
    console.log('in submitHandler')
    const data = this.state;
    console.log("in EditActivityForm, data is ", data);
    this.props.history.push('/activity');
    this.props.EditYourActivityForm(data);
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>Name
          <input onChange={this.changeHandler} type="text" name="name" />
        </label>
        <label>Destination
          <input onChange={this.changeHandler} type="text" name="description" />
        </label>
        <label>Price
          <input onChange={this.changeHandler} type="text" name="price" />
        </label>
        <label>Votes
          <input onChange={this.changeHandler} type="text" name="price" />
        </label>
        
          <input type="submit" value='submit' />
      </form>
      )
  }
}

export default EditYourActivityForm;