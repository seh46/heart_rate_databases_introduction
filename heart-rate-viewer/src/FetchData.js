import React from 'react';
import axios from 'axios';
import Table, {TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

class FetchData extends React.Component {
	constructor() {
		super();
		this.state = {
			"data": "",
			"datapairs": "",
		};
	}

	DataFromServer = () => {
		var URL = "http://67.159.95.29:5000/api/heart_rate/" + this.props.userEmail
		axios.get(URL).then( (response) => {
			console.log(response.status);
			this.setState({"data": response.data});
			var datapieces = JSON.parse(this.state.data);
			let a = this.state.datapairs.slice();
			for (var i = 0; i < datapieces.time.length; i++) {
				a[i] = [datapieces.time[i],datapieces.hr[i]];
			}
			this.setState({"datapairs": a})
		});
	}

	render() {
		return (
			<div>	
				{this.props.userEmail}
				{this.DataFromServer}
				{this.state.data}
				<TableHead>
					<TableRow>
						<TableCell>Time</TableCell>
						<TableCell>HR</TableCell>
					</TableRow>
				</TableHead>
			</div>
		)
	}

}

export default FetchData