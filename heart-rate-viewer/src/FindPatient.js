import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class FindPatient extends React.Component {
	constructor() {
		super();
		this.state = {
			"nameTextField": "",
		}
	}

	onNameTextFieldChange = (event) => {
		this.setState({"nameTextField": event.target.value});
	}

	onButtonClick = (event) => {
		console.log(this.state.nameTextField);
	}

	render() {
		return (
			<div>
				<TextField 
					value={this.state.nameTextField}
					onChange={this.onNameTextFieldChange}/>
				<Button onClick={this.onButtonClick}>
					Log text field data.
				</Button>
				{this.state.nameTextField} 
			</div>
		);
	}
}

export default FindPatient