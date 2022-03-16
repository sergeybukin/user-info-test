import React, { useState } from "react";
import "./order-btn.scss";
import { useDispatch } from "react-redux";
import { orderUsers } from "../../redux/slices/usersSlice";

const OrderBtn = ({}) => {
  const [direction, setDirection] = useState("desc");

  const dispatch = useDispatch();

  const onOrderClick = () => {
    dispatch(orderUsers(direction));

    if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection("desc");
    }
  };

  return (
    <button onClick={() => onOrderClick()} className={"order-btn btn"}>
      <i
        className={`bi bi-sort-numeric-${direction === "desc" ? "up" : "down"}`}
      />
    </button>
  );
};

export default OrderBtn;
