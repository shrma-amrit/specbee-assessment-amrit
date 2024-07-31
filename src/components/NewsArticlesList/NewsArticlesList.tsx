import React, { useEffect, useMemo, useState } from "react";
import "./NewsArticlesList.scss";
import { NewsArticleCard } from "../NewsArticleCard";
import { Pagination } from "../common/Pagination";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

const NewsArticlesList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const newsArticles = useAppSelector(
    (state: RootState) => state.manageNewsArticles.newsArticles
  );
  const selectedAuthors = useAppSelector(
    (state: RootState) => state.manageNewsArticles.selectedAuthors
  );
  const selectedCategories = useAppSelector(
    (state: RootState) => state.manageNewsArticles.selectedCategories
  );

  const filteredNewsArticles = useMemo(() => {
    let filtered = [...newsArticles];
    filtered =
      selectedAuthors.length > 0
        ? filtered.filter((newsArticle) =>
            selectedAuthors.includes(newsArticle.author)
          )
        : filtered;
    filtered =
      selectedCategories.length > 0
        ? filtered.filter((newsArticle) =>
            selectedCategories.includes(newsArticle.source)
          )
        : filtered;

    return filtered;
  }, [newsArticles, selectedAuthors, selectedCategories]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredNewsArticles]);

  const articlesPerPage = 5;
  const totalPages = Math.ceil(filteredNewsArticles.length / articlesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentArticles = filteredNewsArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <div className="content">
      <div className="news-articles-list">
        {currentArticles.map((newsArticle) => (
          <NewsArticleCard
            key={newsArticle.url}
            title={newsArticle.title}
            date={newsArticle.date}
            body={newsArticle.body}
            author={newsArticle.author}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default NewsArticlesList;
