import React, { useState } from "react";
import "./search-bar.scss";
import { useDispatch } from "react-redux";
import { fetchUserByName } from "../../redux/slices/usersSlice";
import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/slices/usersSlice";
import UserListItem from "../users-list/user-list-item";

const SearchBar = ({ placeholder }) => {
  const dispatch = useDispatch();
  const [val, setVal] = useState("");
  const [modalStatus, setModalStatus] = useState(false);
  const { dataSingle } = useSelector(selectUsers);
  const onInputChange = (event) => {
    setVal(event.target.value);
  };

  const onSearchUser = (value) => {
    dispatch(fetchUserByName(value));
    setModalStatus(true);
  };

  const content = !modalStatus ? null : (
    <div className={"user-modal"}>
      {dataSingle ? (
        <UserListItem userData={dataSingle[0]} />
      ) : (
        <div className={"title-small"}>Пользователь не найден</div>
      )}
      <button
        onClick={() => setModalStatus(false)}
        className={"search-btn btn"}
      >
        <i className="bi bi-x"></i>
      </button>
    </div>
  );

  return (
    <div className={"search-bar"}>
      <input
        type="text"
        className="search-bar-input form-control"
        placeholder={placeholder}
        value={val}
        onChange={(event) => onInputChange(event)}
      />
      <button onClick={() => onSearchUser(val)} className={"search-btn btn"}>
        Поиск
      </button>
      {content}
    </div>
  );
};

export default SearchBar;
