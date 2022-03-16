import React from "react";
import "./user-info.scss";
import defaultAvatar from "../../../img/default-avatar.png";

const UserInfo = ({ data }) => {
  const { name, age, company } = data;
  if (data) {
    return (
      <div className={"user-info"}>
        <div className={"user-avatar"}>
          <img src={defaultAvatar} />
        </div>
        <div className={"user-text"}>
          <div className={"user-name title-small"}>
            {name}
            <span className={"subtitle-middle"}> ({age} y.o.)</span>
          </div>
          <div className={"subtitle-middle"}>Company: {company.name}</div>
          <div className={"date"}>
            <span>From </span>
            <span>{new Date(company.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={"user-info"}>
        <div className={"title-small"}>There are no info about this user</div>
      </div>
    );
  }
};

export default UserInfo;
