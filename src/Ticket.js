import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "./Button.js";

const styles = {
  ticket: {
    border: "1px solid #ccc",
    borderRadius: "3px",
    minHeight: "7em",
    padding: "0.5em",
    margin: "0.5em",
    fontWeight: "normal",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
};

class Ticket extends Component {
  static propTypes = {
    desc: PropTypes.string.isRequired,
    handleMoveTicket: PropTypes.func.isRequired
  };

  render() {
    const { desc } = this.props;
    var ticket = this.props.ticket;
    var btnDisplay = '';
    if(ticket.status != 'close') {
      btnDisplay = 
        <Button ticket={ticket} status={ticket.status} btnAction={this.handleBtnAction.bind(this)}/>
    }

    return (
      <div style={styles.ticket}>
        {/* Ticket description */}
        <div>{ticket.desc}</div>
        {/* Ticket actions [Done/Not Fix/Close]. Modify to display them properly */}
        <div>
          {btnDisplay}
        </div>
      </div>
    )
  }
  handleBtnAction(btnAction, ticket) {
    this.props.updateStatus(btnAction, ticket);
  }
}

export default Ticket;
