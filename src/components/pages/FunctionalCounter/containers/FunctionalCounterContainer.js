import { useEffect, useState, useCallback, useMemo } from "react";
import FunctionalCounterLayout from "../components/layout";

const FunctionalCounterContainer = () => {
  const [countValue, setCountValue] = useState(0);

  const handleIncrement = () => {
    setCountValue(countValue + 1);
  };

  const handleDecrement = () => {
    if (countValue > 0) {
      setCountValue(countValue - 1);
    }
  };

  const handleReset = () => {
    setCountValue(0);
  };

  //didMount
  useEffect(() => {}, []);

  //didUpdate
  useEffect(() => {}, [countValue]);

  //unmount
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <FunctionalCounterLayout
      countValue={countValue}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
    />
  );
};

export default FunctionalCounterContainer;
