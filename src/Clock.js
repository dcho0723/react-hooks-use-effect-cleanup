import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  const intervalId = useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return function cleanUp() {
        clearInterval(intervalId)
  }

  }, []);

  

  return <div>{time.toString()}</div>;
}

export default Clock;
