import React, { useState } from "react";
import "./user-list-item.scss";
import defaultAvatar from "../../../img/default-avatar.png";
import { Link } from "react-router-dom";
import EditUserModal from "../../edit-user-modal";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../redux/slices/usersSlice";

const UserListItem = ({ userData }) => {
  const [editPanelStatus, setEditPanelStatus] = useState(false);

  const { name, age, id } = userData;
  const dispatch = useDispatch();

  const onRemoveUser = () => {
    dispatch(removeUser(id));
  };

  return (
    <div className={"user-list-item"}>
      <div className={"user-avatar"}>
        <img src={defaultAvatar} alt={`avatar-${name}`} />
      </div>
      <div className={"user-info"}>
        <Link to={`/user/${id}`}>
          <div className={"user-name title-small"}>{name}</div>
        </Link>
        <div className={"user-age subtitle-middle"}>{age} y.o.</div>
        <div className={"user-edit-panel"}>
          <button
            onClick={() => setEditPanelStatus(true)}
            className={"btn edit-btn"}
          >
            <i className="bi bi-pencil-square"></i>
          </button>
          <button onClick={() => onRemoveUser()} className={"btn remove-btn"}>
            <i className="bi bi-person-x"></i>
          </button>
        </div>
      </div>
      {editPanelStatus ? (
        <EditUserModal
          setEditPanelStatus={setEditPanelStatus}
          name={name}
          age={age}
          id={id}
        />
      ) : null}
    </div>
  );
};
export default UserListItem;
