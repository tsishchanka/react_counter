import React, {Component} from 'react';
import Counter from "../components/Counter";

class CounterPageContainer extends Component {

  state = {
    countValue: 0,
    parityType: 'even',
    color: 'black',
  };

  handleIncrement = () => {

    this.setState( (state)=>{
      const newValue = state.countValue +1;
      if (newValue %2 !== 0) {

        const parityTypeOdd = "odd";

        return {
          countValue: newValue,
          parityType: parityTypeOdd,
          color: '#094d74',
        }
      } else {

          const parityTypeEven = "even";

          return {
            countValue: newValue,
            parityType: parityTypeEven,
            color: 'black',
          }

        }
    });
  };

  handleDecrement = () => {
    this.setState( (state)=>{
      const newValue = Math.max(state.countValue -1, 0);

      if (newValue %2 !== 0) {

        const parityTypeOdd = "odd";

        return {
          countValue: newValue,
          parityType: parityTypeOdd,
          color: '#094d74',
        }
      } else {

        const parityTypeEven = "even";

        return {
          countValue: newValue,
          parityType: parityTypeEven,
          color: 'black',
        }
      }
    });
  };

  handleReset = () => {
    this.setState( (state)=>{
      const newValue = 0;
      const parityTypeReset = "counter value was reset";
      return {
        countValue: newValue,
        parityType: parityTypeReset,
        color: 'black',
      }
    });
  };

  render() {
    return (
      <Counter countValue={this.state.countValue}
               handleIncrement={this.handleIncrement}
               handleReset={this.handleReset}
               handleDecrement={this.handleDecrement}
               handleHiddenStyle={this.handleHiddenStyle}
               parityType={this.state.parityType}
               color={this.state.color}
      />
    );
  }
}

export default CounterPageContainer;