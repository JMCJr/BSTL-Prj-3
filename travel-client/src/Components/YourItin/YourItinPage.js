import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import axios from "axios";
import YourItinInfo from "./YourItinInfo";
import ActivityList from "./ActivityList";
import TokenService from "../../services/TokenService";

export default class YourItinPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataLoaded: false,
			itinerary: "",
			allActivities: []
		};
		this.getItinerary = this.getItinerary.bind(this);
		this.getActivities = this.getActivities.bind(this);
		this.newActivityPost = this.newActivityPost.bind(this);
		this.editActivity = this.editActivity.bind(this);
		this.deleteActivity = this.deleteActivity.bind(this);
	}
	// this.state.itinerary
	//AXIOS CALLS BEGIN
	deleteActivity(id) {
		axios({
			url: `http://localhost:8080/api/noWander/itinerary/${id}/activity`,
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${TokenService.read()}`
			}
		}).then(response => {
			console.log(response);
			this.getActivities(this.state.itinerary.id);
		});
	}
	getItinerary(id) {
		axios({
			url: `http://localhost:8080/api/nowander/itinerary/${id}`,
			method: "GET",
			headers: {
				Authorization: `Bearer ${TokenService.read()}`
			}
		}).then(response => {
			console.log("in YourItinPage: ", response.data);
			this.setState({
				dataLoaded: true,
				itinerary: response.data
			});
		});
	}
	newActivityPost(newActivity) {
		const id = newActivity.itinerary_id;
		axios({
			url: `http://localhost:8080/api/nowander/itinerary/${id}`,
			method: "POST",
			data: newActivity,
			headers: {
				Authorization: `Bearer ${TokenService.read()}`
			}
		}).then(res => {
			console.log(res);
			this.getActivities(id);
		});
	}

	getActivities(id) {
		axios({
			url: `http://localhost:8080/api/nowander/itinerary/${id}/activity`,
			method: "GET",
			headers: {
				Authorization: `Bearer ${TokenService.read()}`
			}
		}).then(response => {
			console.log(response);
			this.setState({
				allActivities: response.data.activities,
				dataLoaded: true
			});
		});
	}
	editActivity(activity) {
		axios({
			url: `http://localhost:8080/api/nowander/itinerary/${
				activity.itinerary_id
			}/${activity.activityId}`,
			method: "PUT",
			data: activity,
			headers: {
				Authorization: `Bearer ${TokenService.read()}`
			}
		}).then(res => {
			console.log(res);
			this.getActivities(activity.itinerary_id);
		});
	}

	//AXIOS CALLS END

	//
	componentDidMount() {
		console.log("instance");
		this.getItinerary(this.props.match.params.id);
	}
	componentWillReceiveProps(nextProps) {
		this.getItinerary(nextProps.match.params.id);
		this.getActivities(nextProps.match.params.id);
		console.log("heyyy", nextProps);
	}

	render() {
		if (!this.state.dataLoaded) {
			return <div>LOADING</div>;
		}
		return (
			<div>
				<YourItinInfo itinerary={this.state.itinerary} />
				<ActivityList
					deleteActivity={this.deleteActivity}
					itinerary={this.state.itinerary}
					getActivities={this.getActivities}
					allActivities={this.state.allActivities}
					newActivityPost={this.newActivityPost}
					editActivity={this.editActivity}
				/>
			</div>
		);
	}
}
