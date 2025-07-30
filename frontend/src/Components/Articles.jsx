import React, { useEffect, useState } from "react";
import ArticleBox from "./ArticleBox";
import axios from "axios";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "http://localhost:3000/articles?_start=1&_end=5"
      );
      setArticles(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-4 justify-center sm:justify-between">
      {articles.map((article) => (
        <ArticleBox {...article} key={article.id} />
      ))}
    </div>
  );
};

export default Articles;
