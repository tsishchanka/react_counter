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
    const newCounter = { countValue: 0 };

    setCountersArray((state) => {
      const updatedCounters = state.map(({ countValue }) => ({
        countValue: countValue % 2 === 0 ? countValue + 1 : countValue,
      }));

      return [...updatedCounters, newCounter];
    });
  }, [countersArray]);

  const handleRemoveCounter = useCallback((index) => {
    setCountersArray((state) => {
      const copy = [...state];

      copy.splice(copy.length - 1, 1);

      return copy.map(({ countValue }) => ({
        countValue: countValue % 2 !== 0 ? countValue - 1 : countValue,
      }));
    });
  }, []);

  const handleResetCounter = useCallback(() => {
    setCountersArray([]);
  }, []);

  const handleIncrement = useCallback((counterIndex) => {
    setCountersArray((state) => {
      return state.map((counter, index) => ({
        countValue:
          counterIndex === index ? counter.countValue + 1 : counter.countValue,
      }));
    });
  }, []);

  const handleDecrement = useCallback(
    (counterIndex) => {
      if (countersArray[counterIndex].countValue > 0) {
        setCountersArray((state) => {
          return state.map((counter, index) => ({
            countValue:
              counterIndex === index
                ? counter.countValue - 1
                : counter.countValue,
          }));
        });
      }
    },
    [countersArray]
  );

  const handleReset = useCallback((counterIndex) => {
    setCountersArray((state) => {
      return state.map((counter, index) => ({
        countValue: counterIndex === index ? 0 : counter.countValue,
      }));
    });
  }, []);

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
