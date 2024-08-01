import React from "react";
import "./Pagination.scss";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaCaretLeft />
      </button>
      {Array.from({ length: totalPages }, (_, index) => {
        return (
          <span
            key={index}
            className={`pagination-btn ${
              currentPage === index + 1 ? "selected-page" : ""
            }`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </span>
        );
      })}
      {/* <span>
        {currentPage} / {totalPages}
      </span> */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaCaretRight />
      </button>
    </div>
  );
};

export default Pagination;
