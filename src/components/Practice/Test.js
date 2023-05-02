import React, { useCallback, useState } from "react";
const dummy = [1];

const Test = () => {
  const [first, setfirst] = useState(0);

  const getData = () => {
    console.log(first);
  };

  const testRef = useCallback((node) => {
    console.log(node);
    getData();
  }, []);

  const render = () => {
    const arr = dummy.map((ele, index) => {
      if (index === dummy.length - 1) {
        return (
          <div ref={testRef} key={index}>
            {ele}
          </div>
        );
      } else return <div key={index}>{ele}</div>;
    });
    //dummy.push(Math.floor(Math.random() * 100000));
    return arr;
  };

  return (
    <div>
      <button onClick={() => setfirst((f) => f + 1)}>press</button>
      <button onClick={() => dummy.push(Math.floor(Math.random() * 100000))}>
        Add
      </button>
      <div>{first}</div>
      {render()}
    </div>
  );
};

export default Test;
