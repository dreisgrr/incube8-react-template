import React, { Component } from "react";
import Ticket from "./Ticket.js";

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
      }
    ]
  };
  render() {    
    return (
      <div>
        <input 
          type="text"
          style={{ borderRadius: "3px" }}
        />
        <button style={{ cursor: "pointer" }}>
          ADD
        </button>
        <br />
        <br />
        <div style={styles.container}>
          <div style={styles.box}>
            <label style={styles.box.label}>IN-PROGRESS</label>
            {
              this.state.tickets.map(ticket => {
               return <Ticket info={ticket} />
              })
            }

          </div> 
          <div style={styles.box}>
            <label style={styles.box.label}>DONE</label>
            {/** show Done tickets below */}
          </div>
          <div style={styles.box}>
            <label style={styles.box.label}>CLOSE</label>
            {/** show Close tickets below */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
