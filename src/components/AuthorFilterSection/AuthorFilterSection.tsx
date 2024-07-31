import React from "react";
import "./AuthorFilterSection.scss";
import { CheckBox } from "../common/CheckBox";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { setSelectedAuthors } from "../../features/manageNewsArticles/manageNewsArticlesSlice";

const AuthorFilterSection: React.FC = () => {
  const dispatch = useAppDispatch();

  const newsArticles = useAppSelector(
    (state: RootState) => state.manageNewsArticles.newsArticles
  );
  const authors = Array.from(
    new Set(newsArticles.map((newsArticle) => newsArticle.author))
  );
  const selectedAuthors = useAppSelector(
    (state: RootState) => state.manageNewsArticles.selectedAuthors
  );

  const handleSelectedAuthorsChange = (selectedAuthors: string[]) => {
    dispatch(setSelectedAuthors(selectedAuthors));
  };

  return (
    <div className="author-filter-section">
      <h3>Author</h3>
      <CheckBox
        labels={authors}
        selectedValues={selectedAuthors}
        onSelectedValuesChange={handleSelectedAuthorsChange}
      />
    </div>
  );
};

export default AuthorFilterSection;
