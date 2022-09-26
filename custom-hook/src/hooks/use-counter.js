import { useState, useEffect } from "react";

// use로 해야 react에서 경고해주고 확인해줌
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]); // 다른 곳에서 가져와 의존성이 생겼기 forwards 추가

  return counter;
};

export default useCounter;
