import React, { Component } from "react";
import PropTypes from "prop-types";




class Button extends Component {
	constructor(props){
		super(props);
	}

	render() {
    	var ticket = this.props.ticket;
		var btnText = '';
		if(this.props.status == 'todo') {
			btnText = 'Done';
		}
		if(this.props.status == 'done') {
			btnText = 'Not Fix';
		}
		return (
			<div>
				<button ref="btn" onClick={this.handleOnClick.bind(this, ticket)}>{btnText}</button>
				<button ref="btn" onClick={this.handleOnClose.bind(this, ticket)}>Close</button>
			</div>
		)
	}
	handleOnClick(ticket) {
		if(ticket.status == 'todo') {
			this.props.btnAction("Done", ticket);
		} 
		else {
			this.props.btnAction("Not Fix", ticket);
		}
	}
	handleOnClose(ticket) {
		this.props.btnAction("Close", ticket);
	}
}

export default Button;