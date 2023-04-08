import React, { useState, useEffect } from "react";
import InfiniteScrollerData from "./InfiniteScrollerData";
import "./InfiniteScroller.css";

const InfiniteScrollerMain = ({ searchTerm }) => {
  const [testData, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const currentPage = page;
      const url = `https://openlibrary.org/search.json?q=${searchTerm}&page=${currentPage}`;
      const fetchedData = await fetch(url);
      const data = await fetchedData.json();
      const newData = [...testData, ...data.docs];
      console.log(data);
      setData(newData);
      setLoading(false);
    } catch (err) {
      console.log("error");
    }
  };

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
    if (bottom) {
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
      fetchData();
    }
  };
  return (
    <div className="container" onScroll={handleScroll}>
      <InfiniteScrollerData data={testData} loading={loading} />
    </div>
  );
};

export default InfiniteScrollerMain;
