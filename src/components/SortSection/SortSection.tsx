import React, { useState } from "react";
import "./SortSection.scss";
import { Radio } from "../common/Radio";

const SortSection: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState<string>("date");

  const sortOptions = ["date", "title"];

  return (
    <div className="sort-section">
      <h3>Sort By</h3>
      <Radio
        name="sort"
        labels={sortOptions}
        selectedValue={selectedSort}
        setSelectedValue={setSelectedSort}
      />
    </div>
  );
};

export default SortSection;
