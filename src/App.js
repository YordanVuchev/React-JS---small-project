import React, { Component } from "react";
import "./App.css";

import Lottery from "./Components/Lottery";
import { getRandomNumber } from "./commands/utils";
import {
  registerTicket,
  removeTicket,
  checkButtonClick,
  resetState
} from "./commands/actions";
import Final from "./Components/Final";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winningNumber: getRandomNumber(),
      remainingTickets: 5,
      tickets: [],
      gameOver: false,
    };
    this.registerTicket = registerTicket.bind(this);
    this.removeTicket = removeTicket.bind(this);
    this.checkButtonClick = checkButtonClick.bind(this);
    this.resetState = resetState.bind( this )
  }

  renderLottery() {
    const actions = {};
    actions.registerTicket = this.registerTicket;
    actions.removeTicket = this.removeTicket;
    actions.checkButtonClick = this.checkButtonClick;
    return (
      <>
        <Lottery
          remainingTickets={this.state.remainingTickets}
          tickets={this.state.tickets}
          actions={actions}
        />
        {console.log(this.state.tickets)}
      </>
    );
  }

  renderFinal() {
    let hasWon = false;
    for (const ticket of this.state.tickets) {
      if (ticket.number === this.state.winningNumber) {
        hasWon = true;
        break;
      }
    }

    return <Final 
    hasWon={hasWon} 
    winningNumber={this.state.winningNumber} 
    resetState = {this.resetState}
    />;
  }

  renderApp() {
    return this.renderLottery();
  }

  render() {
    return this.state.gameOver ? (
      <div className="App">{this.renderFinal()}</div>
    ) : (
      <div className="App">{this.renderLottery()} </div>
    );
  }
}

export default App;
