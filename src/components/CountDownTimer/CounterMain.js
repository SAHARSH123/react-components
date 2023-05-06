import React from "react";
import Counter from "./Counter";

const CounterMain = () => {
  const onExpire = () => {
    console.log("timer Expired");
  };

  const beforeReset = () => {
    console.log("before reset");
  };
  return (
    <>
      <Counter
        duration={5 * 24 * 60 * 60 * 1000}
        onExpire={onExpire}
        beforeReset={beforeReset}
      />
    </>
  );
};

export default CounterMain;
