import React from "react";
import "./users-list.scss";
import UserListItem from "./user-list-item";
import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/slices/usersSlice";
import Loader from "../loader";
import PaginationPanel from "../pagination-panel";

const UsersList = ({ page }) => {
  const { data, loading } = useSelector(selectUsers);

  return (
    <div>
      <div className={"users-list"}>
        {loading ? (
          <Loader />
        ) : (
          data.map((user) => <UserListItem key={user.id} userData={user} />)
        )}
      </div>
      <PaginationPanel page={page} />
    </div>
  );
};

export default UsersList;
