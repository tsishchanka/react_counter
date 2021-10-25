import React from "react";
import Counter from "../../../CounterPage/components/Counter";
import { ROUTES } from "../../../../../routes/routeNames";

const FunctionalCounterLayout = ({
  countValue,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <div>
      <h1>Functional counter</h1>

      <Counter
        countValue={countValue}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    </div>
  );
};

export default FunctionalCounterLayout;
