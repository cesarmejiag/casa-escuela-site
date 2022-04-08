import { useState } from "react";

const useCounter = (initCount = 0, limit = 0, infinite = false) => {
  const [count, setCount] = useState(initCount);

  const increase = () => {
    if (infinite && limit > 0 && count >= limit) {
      setCount(initCount);
    } else {
      if ((limit > 0 && count < limit) || limit === 0) {
        setCount(count + 1);
      }
    }
  };

  return {
    count,
    increase,
  };
};

export default useCounter;
