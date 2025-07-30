import React, { useEffect, useState } from "react";
import BreadCrumb from "../Components/Breadcrumb";
import { BsPerson } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import axios from "axios";

const ArticleDetails = () => {
  const [articleData, setArticleData] = useState({});
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);
  const { articleName } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/articles?shortName=${articleName}`)
      .then((res) => {
        setArticleData(res.data[0]);
      });
  }, [articleName]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:3000/articles?_start=10&_end=14`
      );
      setRelatedArticles(res.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:3000/articles?_start=5&_end=8`
      );
      setPopularArticles(res.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 sm:container mb-16">
      <BreadCrumb />
      <div className="flex flex-col lg:flex-row gap-8 mt-8 text-slate-600 dark:text-slate-300">
        <div className="w-full lg:flex-[3] p-8 shadow-lg bg-white dark:bg-zinc-900 rounded-xl">
          <h1 className="text-4xl">{articleData.title}</h1>
          <div className="flex flex-wrap items-center justify-between mt-16">
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2">
                <BsPerson className="text-4xl" />
                <h3>رضا حمزه ای</h3>
              </div>
              <h3>{articleData.createdAt}</h3>
            </div>
            <div className="flex items-center gap-4 text-red-400">
              <BsShare className="text-3xl" />
              اشتراک گذاری
            </div>
          </div>
          <div className="overflow-hidden rounded-xl mt-12">
            <img src={articleData.cover} className="rounded-2xl mx-auto p-16" alt="" />
          </div>
          <div className="mt-8 space-y-8">
            <p className="">{articleData.body}</p>
          </div>
        </div>
        <div className="w-full lg:flex-1 sticky top-60 h-full">
          <div className="flex flex-col gap-4 p-8 shadow-lg bg-white dark:bg-zinc-900 rounded-xl">
            <h3 className="text-center font-bold">مطالب مرتبط</h3>
            <div className="divide-y dark:divide-slate-600 flex flex-col gap-4">
              {relatedArticles.map((article) => (
                <div
                  className="flex items-center gap-4 pt-2 cursor-pointer transition-all duration-300 ease-in-out hover:pr-4"
                  key={article.id}
                >
                  <div className="flex-1 rounded-lg overflow-hidden">
                    <img src={article.cover} alt=""  className="w-full h-28" />
                  </div>
                  <div className="flex flex-col gap-2 flex-[2]">
                    <Link to={`/article-details/${article.shortName}`}>
                      <h3 className="text-xl">{article.title}</h3>
                    </Link>
                    <p className="text-lg">{article.createdAt}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              className="bg-rose-800 hover:bg-rose-800/90 text-white flex justify-center hover:text-white rounded-xl py-2 px-4 flex-grow"
              to="/allarticles"
            >
              مشاهده همه
            </Link>
          </div>
          <div className="mt-12 flex flex-col gap-4 p-8 shadow-lg bg-white dark:bg-zinc-900 rounded-xl">
            <h3 className="text-center font-bold">مطالب محبوب</h3>
            <div className="divide-y dark:divide-slate-600 flex flex-col gap-4">
              {popularArticles.map((article) => (
                <div
                  className="flex items-center gap-4 pt-2 cursor-pointer transition-all duration-300 ease-in-out hover:pr-4"
                  key={article.id}
                >
                  <div className="flex-1 rounded-lg overflow-hidden">
                    <img src={article.cover} alt="" className="w-full h-28" />
                  </div>
                  <div className="flex flex-col gap-2 flex-[2]">
                    <Link to={`/article-details/${article.shortName}`}>
                      <h3 className="text-xl">{article.title}</h3>
                    </Link>
                    <p className="text-lg">{article.createdAt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 p-8 shadow-lg bg-white dark:bg-zinc-900 rounded-xl">
            <h3 className="text-center font-bold">دسته بندی</h3>
            <div className="flex flex-col gap-4 divide-y">
              <div className="flex items-center justify-between cursor-pointer pt-2 transition-all duration-300 ease-in-out hover:pr-4">
                <div className="flex items-center gap-4">
                  <FaAngleLeft />
                  دسته بندی اول
                </div>
                <span className="text-white bg-rose-800 rounded-[30%] p-2 text-lg font-bold">
                  20
                </span>
              </div>
              <div className="flex items-center justify-between cursor-pointer pt-2 transition-all duration-300 ease-in-out hover:pr-4">
                <div className="flex items-center gap-4">
                  <FaAngleLeft />
                  دسته بندی دوم
                </div>
                <span className="text-white bg-rose-800 rounded-[30%] p-2 text-lg font-bold">
                  20
                </span>
              </div>
              <div className="flex items-center justify-between cursor-pointer pt-2 transition-all duration-300 ease-in-out hover:pr-4">
                <div className="flex items-center gap-4">
                  <FaAngleLeft />
                  دسته بندی سوم
                </div>
                <span className="text-white bg-rose-800 rounded-[30%] p-2 text-lg font-bold">
                  20
                </span>
              </div>
              <div className="flex items-center justify-between cursor-pointer pt-2 transition-all duration-300 ease-in-out hover:pr-4">
                <div className="flex items-center gap-4">
                  <FaAngleLeft />
                  دسته بندی چهارم
                </div>
                <span className="text-white bg-rose-800 rounded-[30%] p-2 text-lg font-bold">
                  20
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
