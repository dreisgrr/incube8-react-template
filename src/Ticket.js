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
    var desc2 = this.props.desc2;
    var status = this.props.status
    var btnDisplay = '';
    if(status != 'close') {
      btnDisplay = 
        <Button status={status} />
    }

    return (
      <div style={styles.ticket}>
        {/* Ticket description */}
        <div>{desc2}</div>
        {/* Ticket actions [Done/Not Fix/Close]. Modify to display them properly */}
        <div>
          {btnDisplay}
        </div>
      </div>
    )
  }
}

export default Ticket;
