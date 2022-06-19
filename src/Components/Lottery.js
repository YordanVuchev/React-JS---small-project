import React, { Component } from "react";

import "../App.css";

import LotteryTicket from "./LotteryTicket";

class Lottery extends Component {
  renderButton() {
    const { remainingTickets, actions } = this.props;
    if (remainingTickets > 0) {
      return <button onClick={actions.registerTicket}>КУПИ БИЛЕТ:</button>;
    }

    return <button onClick={actions.checkButtonClick}>ПРОВЕРКА</button>
  }

  renderTickets() {
    const lotteryTickets = this.props.tickets.map((ticket, index) => 
     <LotteryTicket
        number={ticket.number}
        color={ticket.color}
        key={index}
        index={index}
        removeFunc = {this.props.actions.removeTicket}
      />
    );

    return lotteryTickets;
   
  }

  render() {
    return (
      <>
        <h1>Лотария</h1>
        {this.renderButton()}
        <br />
        <small>оставащи билети: {this.props.remainingTickets}</small>
        <hr />
        {this.renderTickets()}
      </>
    );
  }
}

export default Lottery;
