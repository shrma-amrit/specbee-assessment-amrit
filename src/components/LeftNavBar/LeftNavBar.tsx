import React from "react";
import "./LeftNavBar.scss";
import { AuthorFilterSection } from "../AuthorFilterSection";
import { CategoryFilterSection } from "../CategoryFilterSection";
import { SortSection } from "../SortSection";

const LeftNavBar: React.FC = () => {
  return (
    <div className="left-nav-bar">
      <CategoryFilterSection />
      <AuthorFilterSection />
      <SortSection />
    </div>
  );
};

export default LeftNavBar;
