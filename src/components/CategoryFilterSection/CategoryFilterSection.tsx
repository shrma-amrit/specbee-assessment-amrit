import React from "react";
import "./CategoryFilterSection.scss";
import { CheckBox } from "../common/CheckBox";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { setSelectedCategories } from "../../features/manageNewsArticles/manageNewsArticlesSlice";

const CategoryFilterSection: React.FC = () => {
  const dispatch = useAppDispatch();

  const newsArticles = useAppSelector(
    (state: RootState) => state.manageNewsArticles.newsArticles
  );
  const categories = Array.from(
    new Set(newsArticles.map((newsArticle) => newsArticle.source))
  );
  const selectedCategories = useAppSelector(
    (state: RootState) => state.manageNewsArticles.selectedCategories
  );

  const handleSelectedAuthorsChange = (selectedAuthors: string[]) => {
    dispatch(setSelectedCategories(selectedAuthors));
  };

  return (
    <div className="category-filter-section">
      <h3>Category</h3>
      <CheckBox
        labels={categories}
        selectedValues={selectedCategories}
        onSelectedValuesChange={handleSelectedAuthorsChange}
      />
    </div>
  );
};

export default CategoryFilterSection;
