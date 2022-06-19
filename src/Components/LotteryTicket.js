import React, { Component } from "react";

class LotteryTicket extends Component {
  constructor(props) {
    super(props);
  }

  renderButton() {
    const { removeFunc, index } = this.props;
    return (
      <button
        style={{ float: "left" }}
        onClick={() => {
          removeFunc(index);
        }}
      >X</button>
    );
  }

  render() {
    const { color, number } = this.props;
    const ticketStyle = {
      backgroundColor: color,
      padding: 5,
      width: "60%",
      margin: "auto",
    };
    return (
      <div style={ticketStyle}>
        {this.renderButton()}
        <small>
          Това билетче има числото: <b>{number}</b>
        </small>
      </div>
    );
  }
}

export default LotteryTicket;
