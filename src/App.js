import React, { Component } from "react";

import Ticket from "./Ticket.js";
import Form from "./Form.js";

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

// Keep track of ticket id
let id = 0;

class App extends Component {
  state = {
    tickets: [
      {
        id: id++,
        desc: 'Have fun with Online Test',
        status: 'todo'
      },
      {
        id: id++,
        desc: 'Make this work',
        status: 'todo'
      },
      {
        id: id++,
        desc: 'Meeting at 1PM',
        status: 'todo'
      }
    ],
    cancel: 0
  };
  render() {    
    return (
      <div>
        <Form ticketAdd={this.handleTicketAdd.bind(this)} />
        <br />
        <br />
        <div style={styles.container}>
          <div style={styles.box}>
            <label style={styles.box.label}>IN-PROGRESS</label>
            {
              this.state.tickets.map(ticket => {
                if(ticket.status == 'todo') {
                  return <Ticket 
                    ticket={ticket}
                    updateStatus={this.handleUpdateStatus.bind(this)} />
                }
              })
            }

          </div> 
          <div style={styles.box}>
            <label style={styles.box.label}>DONE</label>
            {
              this.state.tickets.map(ticket => {
                if(ticket.status == 'done') {
                  return <Ticket 
                    ticket={ticket}
                    updateStatus={this.handleUpdateStatus.bind(this)} />
                }
              })
            }
          </div>
          <div style={styles.box}>
            <label style={styles.box.label}>CLOSE</label>
            {
              this.state.tickets.map(ticket => {
                if(ticket.status == 'close') {
                  return <Ticket 
                    ticket={ticket}
                    updateStatus={this.handleUpdateStatus.bind(this)} />
                }
              })
            }
          </div>
        </div>
      </div>
    );
  }
  handleTicketAdd(desc) {
    var newTicket = {
        id: id++,
        desc: desc,
        status: 'todo'
    }
    this.setState({tickets: this.state.tickets.concat(newTicket)});
  }
  handleUpdateStatus(btnAction, ticket) {
    var tickets = this.state.tickets;
    
    for (var i=0; i < tickets.length; i++) {
      if(tickets[i].id == ticket.id){
        if(btnAction == 'Done') {
          tickets[i].status = 'done';
          this.state.cancel = 0;
        }
        if(btnAction == 'Not Fix') {
          tickets[i].status = 'todo';
          this.state.cancel = 1;
        }
        if(btnAction == 'Close') {
          tickets[i].status = 'close';
        }
      }
    }
    this.setState({tickets: tickets});
    console.log(ticket.status);
    console.log(ticket.id);
    if(ticket.status == 'done'){
      this.ticketClose(ticket);
    }
  }

  ticketClose(ticket) {
    setTimeout(function() {
      if(this.state.cancel) {
        return;
      }
      this.handleUpdateStatus('Close', ticket)
      console.log('CLOSED');
    }.bind(this), 5000);
  }
}

export default App;
