import React, { useCallback, useRef, useState } from "react";
import InfiniteScroller from "./InfiniteScroller";

const InfiniteScrollerMain = () => {
  const [query, setQuery] = useState("");
  const [currentData, setCurrentData] = useState([]);
  const controllerRef = useRef(null);

  const handleChange = useCallback((e) => {
    console.log("HI");
    setQuery(e.target.value);
  }, []);

  const render = useCallback(({ title }, key, ref) => {
    return (
      <div key={key} ref={ref}>
        {title}
      </div>
    );
  }, []);

  const getData = useCallback(async (query, currentPage) => {
    try {
      const url = `https://openlibrary.org/search.json?q=${query}&page=${currentPage}`;
      if (controllerRef.current) controllerRef.current.abort();
      controllerRef.current = new AbortController();
      const fetchedData = await fetch(url, {
        signal: controllerRef.current.signal,
      });
      const data = await fetchedData.json();
      const newData = [...currentData, ...data.docs];
      setCurrentData(newData);
      return data;
    } catch (err) {}
  }, []);

  // const temp = (node) => {
  //   console.log(node);
  // };

  return (
    <>
      <input type="text" value={query} onChange={handleChange} />
      <InfiniteScroller
        renderItems={render}
        fetchData={getData}
        currentData={currentData}
        query={query}
      />
    </>
  );
};

export default InfiniteScrollerMain;
