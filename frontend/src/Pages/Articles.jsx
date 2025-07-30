import React, { useEffect, useState } from "react";
import ArticlesSidebar from "../Components/ArticlesSidebar";
import ArticlesNavigation from "../Components/ArticlesNavigation";
import ArticleBox from "../Components/ArticleBox";
import { IoOptionsOutline } from "react-icons/io5";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import MobileSortingArticles from "../Components/MobileSortingArticles";
import MobileFilteringArticles from "../Components/MobileFilteringArticles";
import axios from "axios";

const Articles = () => {
  const [isSortingBtnClicked, setIsSortingBtnClicked] = useState(false);
  const [isFilteringBtnClicked, setIsFilteringBtnClicked] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/articles");
      setArticles(res.data);
    };
    fetchData();
  });

  return (
    <div className="px-4 sm:container flex flex-wrap gap-8 mb-16">
      <div className="hidden md:block flex-1 mt-8 text-slate-600 dark:text-slate-300">
        <ArticlesSidebar />
      </div>
      <div className="md:hidden flex-grow flex items-center justify-between gap-4 mt-8 text-slate-600 dark:text-white">
        <div
          className="bg-white dark:bg-zinc-900 flex-grow flex items-center gap-4 p-6 rounded-xl shadow-lg cursor-pointer"
          onClick={() => setIsFilteringBtnClicked(!isFilteringBtnClicked)}
        >
          <IoOptionsOutline className="text-4xl" />
          فیلتر
        </div>
        {isFilteringBtnClicked && (
          <MobileFilteringArticles close={setIsFilteringBtnClicked} />
        )}
        <div
          className="bg-white dark:bg-zinc-900 flex-grow flex items-center gap-4 p-6 rounded-xl shadow-lg cursor-pointer"
          onClick={() => setIsSortingBtnClicked(!isSortingBtnClicked)}
        >
          <HiOutlineBarsArrowDown className="text-4xl" />
          مرتب‌سازی
        </div>
        {isSortingBtnClicked && (
          <MobileSortingArticles close={setIsSortingBtnClicked} />
        )}
      </div>
      <div className="md:flex-[3] mt-20 lg:mt-8 text-slate-600 dark:text-slate-300">
        <ArticlesNavigation />
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-8 md:mt-8">
          {articles.map((article) => (
            <ArticleBox {...article} key={article.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
