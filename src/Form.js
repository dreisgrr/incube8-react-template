import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  container: {
    display: "flex"
  },
  box: {
    flex: "0 1 33%",
    textAlign: "center",
    borderRight: "1px solid #ccc",
    label: {
      fontWeight: 600
    }
  }
};
	
var desc = '';

class Form extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			btnText: 'ADD'
		}
	}
	render() {
		return(
			<div>
				<form onSubmit={this.handleOnSubmit.bind(this)} desc={desc}>
					<input ref="text"
		          		type="text"
		          		style={{ borderRadius: "3px" }}
		        	/>
		        	<button 
		        		ref="btn"
		        		style={{ cursor: "pointer" }}
		        		>
		          		{this.state.btnText}
		        	</button>
	        	</form>
        	</div>
		)
	}
	handleOnSubmit(e) {
		e.preventDefault();
		this.refs.btn.setAttribute("disabled", "disabled");
		this.setState({btnText: '...'});
		setTimeout(function() {
			this.addTicket();
			this.setState({btnText: 'ADD'});
			this.refs.btn.removeAttribute("disabled");
		}.bind(this), 2000);
	}
	addTicket() {
		if(!this.refs.text.value.trim()) {
			alert("Cannot input empty string!");
			return;
		}
		this.props.ticketAdd(this.refs.text.value);
		console.log(desc);
		this.refs.text.value = '';
	}

}

export default Form;