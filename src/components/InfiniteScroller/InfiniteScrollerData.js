import React from "react";

const InfiniteScrollerData = ({ data, loading }) => {
  const arr = data.map((d, index) => <li key={index}>{d.title}</li>);
  return (
    <div className="inner-content">
      {arr}
      {loading ? <p>Loading...</p> : <p className="loader"></p>}
    </div>
  );
};

export default InfiniteScrollerData;
