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
  const selectedSortBy = useAppSelector(
    (state: RootState) => state.manageNewsArticles.selectedSortBy
  );
  const selectedSortingOrder = useAppSelector(
    (state: RootState) => state.manageNewsArticles.selectedSortingOrder
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

    filtered.sort((a, b) => {
      if (selectedSortBy === "Date") {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (isNaN(dateA.getTime()) && isNaN(dateB.getTime())) {
          return 0;
        } else if (isNaN(dateA.getTime())) {
          return 1;
        } else if (isNaN(dateB.getTime())) {
          return -1;
        }

        return selectedSortingOrder === "asc"
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();
      } else if (selectedSortBy === "Title") {
        return selectedSortingOrder === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }

      return 0;
    });

    return filtered;
  }, [
    newsArticles,
    selectedAuthors,
    selectedCategories,
    selectedSortBy,
    selectedSortingOrder,
  ]);

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
          <NewsArticleCard key={newsArticle.url} newsArticle={newsArticle} />
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
