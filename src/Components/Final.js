import React, { Component } from "react";

class Final extends Component {
  renderInfo() {
    const { hasWon, winningNumber } = this.props;
    return hasWon ? (
      <h1>
        Поздравления вие печелите!
        <br />
        Печелившото число беше {winningNumber}
      </h1>
    ) : (
      <h1>Вие не печелите, печелившото число беше {winningNumber}</h1>
    );
  }

  renderButton()
  {
      return (
          <button onClick={this.props.resetState}>Ново теглене</button>
      );
  }

  render()
  {
    return(
        <div className="App">
            {this.renderInfo()}
            {this.renderButton()}
        </div>
    );
  }
}

export default Final;
