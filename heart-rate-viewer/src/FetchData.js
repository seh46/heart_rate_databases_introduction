import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Table, {TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper'

class FetchData extends React.Component {
	constructor() {
		super();
		this.state = {
			"data": "",
			"nameTextField": "",
			"nameToSearch": "",
			"time": [],
			"hr": [],
			"datapairs": [],
		};
	}

	onNameTextFieldChange = (event) => {
		this.setState({"nameTextField": event.target.value});
	}

	onButtonClick = (event) => {
		console.log(this.state.nameTextField);
		this.setState({"nameToSearch": this.state.nameTextField})
	}

	DataFromServer = () => {
		axios.get("http://67.159.95.29:5000/api/heart_rate/" + this.state.nameToSearch).then( (response) => {
			console.log(response.status);
			this.setState({"data": response.data, "time": response.data.time, "hr": response.data.hr});
		});
		this.FormatDataTable()
	}

	FormatDataTable = () => {
		//var datapieces = JSON.parse(this.state.data);
		var a = [];
		for (var i = 0; i < this.state.time.length; i++) {
			a.push([this.state.time[i], this.state.hr[i]]);
		}
		this.setState({"datapairs": a})
		console.log(this.state.datapairs);
	}

	render() {
		return (
			<div>
				<div>
					<TextField 
						value={this.state.nameTextField}
						onChange={this.onNameTextFieldChange}/>
					<Button onClick={this.onButtonClick}>
						Get Heart Rate Data
					</Button>
				</div>
				<div onClick={this.DataFromServer}>
					{this.state.nameToSearch}
					{this.state.data}
					{this.state.time}
					{this.state.hr}
					{this.state.datapairs}
				</div>
			</div>
		)
	}

}

export default FetchData