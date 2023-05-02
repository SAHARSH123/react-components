import React, { useCallback, useEffect, useRef, useState } from "react";

const InfiniteScroller = ({ query, fetchData, renderItems, currentData }) => {
  const [loading, setLoading] = useState(false);
  const currentPage = useRef(1);
  const observer = useRef(null);
  useEffect(() => {
    getData();
  }, [query]);

  const getData = async () => {
    setLoading(true);
    await fetchData(query, currentPage.current);
    setLoading(false);
  };

  const lastElementObserve = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting) {
          currentPage.current += 1;
          getData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const render = () => {
    // if (currentData.length === 0) return <></>;
    return currentData.map((item, index) => {
      if (index === currentData.length - 1 && loading === false)
        return renderItems(item, index, lastElementObserve);
      return renderItems(item, index, null);
    });
  };

  return (
    <div>
      {render()}
      {loading && <div>Loading</div>}
    </div>
  );
};

export default InfiniteScroller;
