import React, { useEffect } from "react";
import "./NewsArticles.scss";
import { LeftNavBar } from "../../components/LeftNavBar";
import { NewsArticlesList } from "../../components/NewsArticlesList";
import { useGetAllNewsArticlesQuery } from "../../features/manageNewsArticles/manageNewsArticlesApi";
import { useAppDispatch } from "../../app/hooks";
import {
  setError,
  setLoading,
  setNewsArticles,
} from "../../features/manageNewsArticles/manageNewsArticlesSlice";
import { Loader } from "../../components/common/Loader";

const NewsArticles: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetAllNewsArticlesQuery();

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading());
    } else if (error) {
      dispatch(setError(error));
    } else {
      dispatch(setNewsArticles(data ?? []));
    }
  }, [data, dispatch, error, isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="news-articles-page">
          <LeftNavBar />
          <NewsArticlesList />
        </div>
      )}
    </>
  );
};

export default NewsArticles;
