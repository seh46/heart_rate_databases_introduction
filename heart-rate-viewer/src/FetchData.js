import React from 'react';
import axios from 'axios';
import Table, {TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

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
			<div>	
				{this.props.userEmail}
				<div onClick={this.DataFromServer}>
					{this.state.data}
					<TableHead>
						<TableRow>
							<TableCell>Time</TableCell>
							<TableCell>HR</TableCell>
						</TableRow>
					</TableHead>
				</div>
			</div>
		)
	}

}

export default FetchData