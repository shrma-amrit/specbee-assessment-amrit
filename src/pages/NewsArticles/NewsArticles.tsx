import React, { useEffect, useState } from "react";
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
import { FaFilter } from "react-icons/fa";

const NewsArticles: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isLeftNavBarOpen, setIsLeftNavBarOpen] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 425);
  };

  const { data, error, isLoading } = useGetAllNewsArticlesQuery();

  const toggleIsLeftNavBarOpen = () => {
    setIsLeftNavBarOpen((prev) => !prev);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsLeftNavBarOpen(false);
    } else {
      setIsLeftNavBarOpen(true);
    }
  }, [isMobile]);

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
        <div className="news-articles">
          <FaFilter className="filter-icon" onClick={toggleIsLeftNavBarOpen} />
          <div className="news-articles-page">
            {isLeftNavBarOpen ? (
              <LeftNavBar
                isMobile={isMobile}
                setIsLeftNavBarOpen={setIsLeftNavBarOpen}
              />
            ) : (
              <></>
            )}
            <NewsArticlesList />
          </div>
        </div>
      )}
    </>
  );
};

export default NewsArticles;
