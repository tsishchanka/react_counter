import React from "react";
import styles from "../MainCounter/styles.module.scss";
import PropTypes from "prop-types";
import Counter from "../../../CounterPage/components/Counter";

const MainCounter = ({
  countersArray,
  sumOfArrayValues,
  numberOfCounters,
  handleResetCounter,
  handleAddCounter,
  handleRemoveCounter,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <div>
      <h1>Main Counter</h1>

      <div className={styles.mainCounterButtons}>
        <button className={styles.mainCounterButton} onClick={handleAddCounter}>
          {" "}
          Add Counter{" "}
        </button>
        <button
          className={styles.mainCounterButton}
          onClick={handleRemoveCounter}
        >
          {" "}
          Remove Counter{" "}
        </button>
        <button
          className={styles.mainCounterButton}
          onClick={handleResetCounter}
        >
          {" "}
          Reset{" "}
        </button>
      </div>

      <div className={styles.infoDisplay}>
        <span className={styles.infoCounters}>
          Quantity of counters {numberOfCounters}
        </span>
        <span className={styles.infoCounters}>
          Sum of counters values {sumOfArrayValues}
        </span>
      </div>

      <div className={styles.countersSection}>
        {countersArray.map((counter, index) => {
          return (
            <div key={index}>
              <Counter
                countValue={counter.countValue}
                handleRemoveCounter={() => handleRemoveCounter(index)}
                handleIncrement={() => handleIncrement(index)}
                handleDecrement={() => handleDecrement(index)}
                handleReset={() => handleReset(index)}
                numberOfCounters={() => numberOfCounters()}
                sumOfArrayValues={() => sumOfArrayValues()}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

MainCounter.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      countValue: PropTypes.number,
    })
  ),
  countersArray: PropTypes.array,
  lengthOfCountValuesArray: PropTypes.number,
  handleRemoveCounter: PropTypes.func,
  handleAddCounter: PropTypes.func,
  handleResetCounter: PropTypes.func,
};

export default MainCounter;
