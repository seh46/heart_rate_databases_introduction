import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class FetchData extends React.Component {
	constructor() {
		super();
		this.state = {
			"data": "blank",
			"nameTextField": "",
			"nameToSearch": "",
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
			this.setState({"data": response.data});
		});
	}

	render() {
		return (
			<div>
				<div>
					<TextField 
						value={this.state.nameTextField}
						onChange={this.onNameTextFieldChange}/>
					<Button onClick={this.onButtonClick}>
						Log text field data.
					</Button>
				</div>
				<div onClick={this.DataFromServer}>
					{this.state.nameToSearch}
					{this.state.data}
				</div>
			</div>
		)
	}

}

export default FetchData