import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const Counter = ({countValue, handleIncrement, handleReset, handleDecrement, parityType,  color }) => {

  return (

    <div className={styles.wrapper}
         style={{backgroundColor: color}}>

      <div className={styles.display}>{ countValue }</div>
      <div className={styles.parityTypeText}>

        <p>{parityType}</p>

      </div>
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
