import React from "react";
import "./control-panel.scss";
import SearchBar from "../search-bar";
import OrderBtn from "../order-btn";

const ControlPanel = ({}) => {
  return (
    <div className={"control-panel"}>
      <SearchBar placeholder={"Search by name..."} />
      <OrderBtn />
    </div>
  );
};

export default ControlPanel;
