import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import YourItinInfo from './YourItinInfo';
import ActivityList from './ActivityList';


export default class YourItinPage extends Component{
	constructor(props){
		super(props);
		this.state={
			dataLoaded:false,
			itinerary: ""
		}
		this.getItinerary=this.getItinerary.bind(this)
	}
	getItinerary(id){
		axios({
			url: `http://localhost:8080/api/nowander/itinerary/${id}`,
			method: "GET"
		}).then(response => {
			console.log("in YourItinPage: ", response.data);
			this.setState({
				dataLoaded: true,
				itinerary: response.data
			});
		});
	}

	componentDidMount(){
		console.log("instance")
		this.getItinerary(this.props.match.params.id);
	}

	componentWillReceiveProps(nextProps){
		this.getItinerary(nextProps.match.params.id)
		console.log("heyyy", nextProps);
	}

	render(){
		if (!this.state.dataLoaded) {
		return <div>LOADING</div>
	}
	return (
		<div>
			<YourItinInfo 
			itinerary={this.state.itinerary}
			/>
			<ActivityList itinerary={this.state.itinerary} />
		</div>
		)
	}
}