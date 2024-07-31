import React from "react";
import "./SortSection.scss";
import { Radio } from "../common/Radio";
import { SortByType } from "../../features/manageNewsArticles/types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import {
  setSortBy,
  toggleSortingOrder,
} from "../../features/manageNewsArticles/manageNewsArticlesSlice";

const SortSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const sortOptions: SortByType[] = ["Date", "Title"];

  const selectedSortBy = useAppSelector(
    (state: RootState) => state.manageNewsArticles.selectedSortBy
  );
  const selectedSortingOrder = useAppSelector(
    (state: RootState) => state.manageNewsArticles.selectedSortingOrder
  );

  const handleSelectedSortByChange = (sortBy: string) => {
    if (sortOptions.includes(sortBy as SortByType)) {
      dispatch(setSortBy(sortBy as SortByType));
    }
  };

  const handleSortingOrderChange = () => {
    dispatch(toggleSortingOrder());
  };

  return (
    <div className="sort-section">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Sort By</h3>
        <button onClick={handleSortingOrderChange}>
          {selectedSortingOrder}
        </button>
      </div>
      <Radio
        name="sort"
        labels={sortOptions}
        selectedValue={selectedSortBy}
        setSelectedValue={handleSelectedSortByChange}
      />
    </div>
  );
};

export default SortSection;
