import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(1);

  useEffect(
    (previousState) => {
      console.log("Screen Rendered");
      checkCount();
    },
    [count]
  );

  function updateCount() {
    setCount((previousState) => {
      return previousState + 1;
    });
  }

  function checkCount() {
    if (count > 10) {
      setCount(1);
    }
  }

  return (
    <>
      <h1>I have Rendered {count} times</h1>

      <button onClick={updateCount}>Increase count</button>
    </>
  );
}
export default Timer;
