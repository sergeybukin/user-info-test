import React, { useEffect, useState } from "react";
import "./pagination-panel.scss";
import PaginationStepBtn from "./pagination-step-btn";
import PaginationItem from "./pagination-item";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectUsers } from "../../redux/slices/usersSlice";
import { useHistory } from "react-router-dom";

const PaginationPanel = ({ page }) => {
  const { dataNext } = useSelector(selectUsers);

  const [paginationStep, setPaginationStep] = useState(6);
  const [pageCount, setPageCount] = useState(parseInt(page));
  const [currPage, setCurrPage] = useState(parseInt(page));
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(fetchUsers(currPage, paginationStep));
  }, [paginationStep, currPage]);

  const onPageClick = (dir) => {
    if (dir === "next") {
      const newPage = currPage + 1;
      setCurrPage(newPage);
      history.push(`${newPage}`);
      if (newPage > pageCount) {
        const newCount = pageCount + 1;
        setPageCount(newCount);
      }
    }
    if (dir === "prev" && pageCount > 1) {
      const newPage = currPage - 1;
      history.push(`users-list?page=${newPage}`);
      setCurrPage(newPage);
    }
    if (Number.isInteger(dir)) {
      history.push(`users-list?page=${dir}`);
      setCurrPage(dir);
    }
  };

  const onPaginationStep = (val) => {
    const newPageCount = val === "" ? 1 : (pageCount * paginationStep) / val;
    setPageCount(newPageCount);
    setCurrPage(1);
    setPaginationStep(val);
  };

  const items = [];

  for (let i = 1; i <= pageCount; i++) {
    items.push(
      <PaginationItem
        onPageClick={onPageClick}
        label={i}
        val={i}
        key={i}
        currPage={currPage}
      />
    );
  }

  return (
    <div className="pagination-wrapper">
      <nav aria-label="...">
        <ul className="pagination">
          <PaginationItem
            onPageClick={onPageClick}
            label={"Prev"}
            val={"prev"}
            dataNext={currPage === 1 ? [] : undefined}
          />
          {items}
          <PaginationItem
            onPageClick={onPageClick}
            label={"Next"}
            val={"next"}
            dataNext={dataNext}
            paginationStep={paginationStep}
          />
        </ul>
      </nav>
      <PaginationStepBtn
        setItemsPerPage={onPaginationStep}
        step={6}
        label={"6"}
      />
      <PaginationStepBtn
        setItemsPerPage={onPaginationStep}
        step={10}
        label={"10"}
      />
      <PaginationStepBtn
        setItemsPerPage={onPaginationStep}
        step={""}
        label={"All"}
      />
    </div>
  );
};

export default PaginationPanel;
