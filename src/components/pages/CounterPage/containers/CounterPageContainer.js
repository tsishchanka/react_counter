import React, { Component } from "react";
import Counter from "../components/Counter";
import { PARITY_TYPES } from "../../constants";

class CounterPageContainer extends Component {
  state = {
    countValue: 0,
    parityType: PARITY_TYPES.EVEN,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.countValue !== this.state.countValue) {
      const recalculatedParityType =
        this.state.countValue % 2 === 0 ? PARITY_TYPES.EVEN : PARITY_TYPES.ODD;
      this.setState({ ...this.state, parityType: recalculatedParityType });
    }
  }

  handleIncrement = () => {
    this.setState({ ...this.state, countValue: this.state.countValue + 1 });
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState({ ...this.state, countValue: this.state.countValue + 1 });
    }
  };

  handleReset = () => {
    this.setState({
      ...this.state,
      countValue: 0,
    });
  };

  render() {
    return (
      <Counter
        countValue={this.state.countValue}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleReset={this.handleReset}
        parityType={this.state.parityType}
      />
    );
  }
}

export default CounterPageContainer;
