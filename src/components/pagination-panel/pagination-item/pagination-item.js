import React from "react";
import "./pagination-item.scss";

const PaginationItem = ({
  label,
  onPageClick,
  val,
  currPage,
  dataNext,
  paginationStep,
}) => {
  let active = currPage === val ? "active" : "";

  if (dataNext !== undefined && dataNext.length === 0) {
    active = "disabled";
  }
  if (paginationStep === "") {
    active = "disabled";
  }
  return (
    <li className={`page-item ${active}`}>
      <a onClick={() => onPageClick(val)} className="page-link">
        {label}
      </a>
    </li>
  );
};

export default PaginationItem;
