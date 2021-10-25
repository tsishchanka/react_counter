import { useEffect, useState, useCallback, useMemo } from "react";
import FunctionalCounterLayout from "../components/layout";
import { useCounter } from "../../../../hooks";

const FunctionalCounterContainer = () => {
  const [count, increment, decrement, reset] = useCounter(0);

  return (
    <FunctionalCounterLayout
      countValue={count}
      handleIncrement={increment}
      handleDecrement={decrement}
      handleReset={reset}
    />
  );
};

export default FunctionalCounterContainer;
