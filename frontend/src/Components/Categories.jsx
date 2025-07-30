import React, { useEffect, useState } from "react";
import RoundedProductCard from "./RoundedProductCard";
import axios from "axios";

const Categories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:3000/products?_start=20&_end=26`
      );
      setProducts(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="my-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <img
          src="/images/category-right.jpg"
          className="rounded-2xl cursor-pointer shadow-lg select-none"
          alt=""
        />
        <img
          src="/images/category-left.jpg"
          className="rounded-2xl cursor-pointer shadow-lg select-none"
          alt=""
        />
      </div>
      <div className="flex justify-center sm:justify-between flex-wrap gap-8 mt-16">
        {products.map((product) => (
          <RoundedProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
