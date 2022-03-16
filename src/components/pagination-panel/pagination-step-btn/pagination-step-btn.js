import React from "react";
import "./pagination-step-btn.scss";

const PaginationStepBtn = ({ setItemsPerPage, step, label }) => {
  return (
    <button
      onClick={() => setItemsPerPage(step)}
      className={"btn btn-pagination-step"}
    >
      {label}
    </button>
  );
};

export default PaginationStepBtn;
