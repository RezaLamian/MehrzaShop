import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import ArticleBox from "../Components/ArticleBox";
import SectionHeader from "../Components/SectionHeader";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaAngleLeft } from "react-icons/fa";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [articles, setArticles] = useState([]);
  const { value } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res1 = await axios.get(`http://localhost:3000/products?q=${value}`);
      const res2 = await axios.get(`http://localhost:3000/articles?q=${value}`);
      setProducts(res1.data);
      setArticles(res2.data);
    };
    fetchData();
  }, [value]);

  crypto

  return (
    <div className="px-8 sm:container text-slate-600 dark:text-slate-300 flex flex-col mb-16">
      <div>
        {products.length === 0 ? (
          <div className="my-16 bg-red-100 rounded-lg border border-b border-red-500 text-red-700 px-4 py-3 w-full">
            <span className="block sm:inline">
              محصولی برای جستجوی مدنظر شما وجود ندارد
            </span>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between my-20 ">
              <h1 className="text-3xl font-bold">محصولات یافت شده</h1>
              <Link
                className="flex items-center gap-2 font-bold text-rose-500 text-3xl"
                to="/allproducts"
              >
                مشاهده همه
                <FaAngleLeft />
              </Link>
            </div>
            <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {products.map((product) => (
                <ProductCard {...product} />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="h-1 bg-rose-700 my-16 w-full rounded-full"></div>

      <div>
        {articles.length === 0 ? (
          <div className="bg-red-100 rounded-lg border border-b border-red-500 text-red-700 px-4 py-3 w-full">
            <span className="block sm:inline">
              مقاله‌ای برای جستجوی مدنظر شما وجود ندارد
            </span>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">مقالات یافت شده</h1>
              <Link
                className="flex items-center gap-2 font-bold text-rose-500 text-3xl"
                to="/allarticles"
              >
                مشاهده همه
                <FaAngleLeft />
              </Link>
            </div>
            <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-20">
              {articles.map((article) => (
                <ArticleBox {...article} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
