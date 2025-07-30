import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "./ProductCard";

const InfiniteScrollComponent = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    console.log("fetched.");
  };

  return (
    <InfiniteScroll
      dataLength={23}
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    ></InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
