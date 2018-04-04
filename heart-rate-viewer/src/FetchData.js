import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class FetchData extends React.Component {
	constructor() {
		super();
		this.state = {
			"data": "blank",
		};
	}

	DataFromServer = () => {
		var URL = "http://67.159.95.29:5000/api/heart_rate/" + this.props.userEmail
		axios.get(URL).then( (response) => {
			console.log(response.status);
			this.setState({"data": response.data});
		});
	}

	render() {
		return (
			<div onClick={this.DataFromServer}>
				{this.state.nameToSearch}
				{this.state.data}
			</div>
		)
	}

}

export default FetchData