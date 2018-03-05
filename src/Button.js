import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {


	render() {
		var status = this.props.status;
		var btnText = '';
		if(status == 'todo') {
			btnText = 'Done';
		}
		if(status == 'done') {
			btnText = 'Not Fix';
		}

		return (
			<div>
				<button>{btnText}</button>
				<button>Close</button>
			</div>
		)
	}
}

export default Button;