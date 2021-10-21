import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

import {Link} from "react-router-dom";

const Counter = ({
                   countValue,
                   handleIncrement,
                   handleDecrement,
                   handleReset,
}) => {
  const isEven = countValue % 2 === 0;
  return (
    <div className={styles.wrapper}
         style={{backgroundColor: isEven ? "black" : "#094d74"
         }}
    >

      <div className={styles.display}>{ countValue }</div>
      <div className={styles.display}>{isEven ? "Even" : "Odd"}</div>
      <div className={styles.controlButtons}>
        <button className={styles.controlButton} onClick={handleDecrement} > - </button>
        <button className={styles.resetButton} onClick={handleReset}>Reset</button>
        <button className={styles.controlButton} onClick={handleIncrement} > + </button>
      </div>

    </div>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleReset: PropTypes.func,
  parityType: PropTypes.string,
}

export default Counter;
