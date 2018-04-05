import React from 'react';
import axios from 'axios';
import Table, {TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

class FetchData extends React.Component {
	constructor() {
		super();
		this.state = {
			"data": "",
			"datapairs": [],
		};
	}

	DataFromServer = () => {
		var URL = "http://67.159.95.29:5000/api/heart_rate/" + this.props.userEmail
		axios.get(URL).then( (response) => {
			console.log(response.status);
			this.setState({"data": response.data});
		});
	}

	FormatDataTable = () => {
		var datapieces = JSON.parse(this.state.data);
		var a = [];
		for (var i = 0; i < datapieces.time.length; i++) {
			a.push([datapieces.time[i], datapieces.hr[i]]);
		}
		this.setState({"datapairs": a})
		console.log(this.state.datapairs);
	}

	render() {
		return (
			<div>	
				{this.props.userEmail}
				{this.DataFromServer}
				{this.FormatDataTable}
				<TableHead>
					<TableRow>
						<TableCell>Time</TableCell>
						<TableCell>HR</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>{this.state.datapairs[0]}</TableCell>
					</TableRow>
				</TableBody>
			</div>
		)
	}

}

export default FetchData