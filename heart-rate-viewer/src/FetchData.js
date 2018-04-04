import React from 'react';
import axios from 'axios';

class FetchData extends React.Component {
	constructor() {
		super();
		this.state = {
			"data": "blank",
		};
		this.state = {
			"user": this.props.userEmail,
		};
	}

	DataFromServer = () => {
		axios.get("http://67.159.95.29:5000/api/heart_rate/seh46@duke.edu").then( (response) => {
			console.log(response.status);
			this.setState({"data": response.data});
		});
	}

	render() {
		return (
			<div onClick={this.DataFromServer}>
				{this.state.data}
			</div>
		)
	}

}

export default FetchData