import React, { useCallback, useEffect, useState } from "react";
import Box from "./Box";

const BoxMain = () => {
  const [boxes, setBoxes] = useState(0);

  const onResize = useCallback(() => {
    setBoxes((curBox) => {
      if (curBox !== "" && curBox >= 0) {
        return curBox + 1;
      }
    });
  }, []);

  const debounce = useCallback((cb, delay) => {
    let timerId = null;
    let throttleId = null;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      if (!throttleId) {
        timerId = setTimeout(() => {
          cb();
          timerId = null;
          throttleId = setTimeout(() => {
            throttleId = null;
          }, delay);
        }, delay);
      }
    };
  }, []);

  useEffect(() => {
    const debounceWrapper = debounce(onResize, 3000);
    window.addEventListener("resize", debounceWrapper);
    return () => window.removeEventListener("resize", debounceWrapper);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setBoxes(parseInt(value));
    } else {
      setBoxes("");
    }
  };

  return (
    <div className="main-container">
      <div className="header-container">
        <input
          type="text"
          aria-label="inputBox"
          id="boxInput"
          onChange={handleChange}
          value={boxes}
        />
        <button>Submit</button>
      </div>
      <div className="body-container">
        {boxes > 0 &&
          [...new Array(boxes)].map((box, index) => <Box key={index} />)}
      </div>
    </div>
  );
};

export default BoxMain;
