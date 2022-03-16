import React, { useEffect } from "react";
import "./user-page.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUser,
  selectUsers,
  fetchUserProducts,
} from "../../redux/slices/usersSlice";
import Loader from "../loader";
import { Link } from "react-router-dom";
import UserInfo from "./user-info";
import UserProducts from "./user-products";

const UserPage = ({ id }) => {
  const { dataSingle, loading, userProducts, productLoading } =
    useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProducts(id));
    dispatch(fetchUser(id));
  }, [dispatch]);

  if (loading || productLoading) {
    return <Loader />;
  } else {
    return (
      <div className={"user-page-wrapper"}>
        <Link to={"/users-list"}>
          <i className="bi bi-chevron-left"></i>
        </Link>
        <UserInfo data={dataSingle} />
        <UserProducts data={userProducts} />
      </div>
    );
  }
};

export default UserPage;
