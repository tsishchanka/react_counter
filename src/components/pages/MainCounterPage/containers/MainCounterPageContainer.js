import React from "react";
import { useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import FunctionalCounterContainer from "../../FunctionalCounter/containers/FunctionalCounterContainer";

import MainCounter from "../components/MainCounter";

const MainCounterContainer = () => {
  const [countersArray, setCountersArray] = useState([]);

  //Quantity of counters
  const numberOfCounters = useMemo(() => {
    return countersArray.length;
  }, [countersArray]);

  //Sum of counters values
  const sumOfArrayValues = useMemo(() => {
    return countersArray.reduce((result, num) => {
      return (result += num.countValue);
    }, 0);
  }, [countersArray]);

  const handleAddCounter = useCallback(() => {
    const countersArrayAdded = [...countersArray, FunctionalCounterContainer];
    const mapped = countersArrayAdded.map((counter) => {
      return {
        countValue: 0,
      };
    });

    setCountersArray(mapped);
  }, [countersArray]);

  const handleRemoveCounter = useCallback(
    (index) => {
      const countersArrayCopy = [...countersArray];
      if (numberOfCounters > 0) {
        countersArrayCopy.splice(countersArrayCopy.length - 1, 1);

        setCountersArray(countersArrayCopy);
      }
    },
    [countersArray]
  );

  const handleResetCounter = useCallback(() => {
    const countersArrayCopy = [...countersArray];
    countersArrayCopy.splice(0);
    setCountersArray(countersArrayCopy);
  }, [countersArray]);

  const handleIncrement = useCallback(
    (index) => {
      const increasedValue = countersArray.map((counter, countIndex) => {
        if (countIndex === index) {
          counter.countValue++;
        }
        return counter;
      });

      setCountersArray(increasedValue);
    },
    [countersArray]
  );

  const handleDecrement = useCallback(
    (index) => {
      const decreasedValue = countersArray.map((counter, countIndex) => {
        if (countIndex === index && counter.countValue > 0) {
          counter.countValue--;
        }
        return counter;
      });

      setCountersArray(decreasedValue);
    },
    [countersArray]
  );

  const handleReset = useCallback(
    (index) => {
      const updatedState = countersArray.map((counter, countIndex) => {
        if (countIndex === index) {
          counter.countValue = 0;
        }
        return counter;
      });

      setCountersArray(updatedState);
    },
    [countersArray]
  );

  return (
    <MainCounter
      countersArray={countersArray}
      numberOfCounters={numberOfCounters}
      sumOfArrayValues={sumOfArrayValues}
      handleAddCounter={handleAddCounter}
      handleRemoveCounter={handleRemoveCounter}
      handleResetCounter={handleResetCounter}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
    />
  );
};

export default MainCounterContainer;
