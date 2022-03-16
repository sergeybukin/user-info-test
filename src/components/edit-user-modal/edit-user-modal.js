import React, { useState } from "react";
import "./edit-user-modal.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, updateUser } from "../../redux/slices/usersSlice";

const EditUserModal = ({ name, age, setEditPanelStatus, id }) => {
  const [nameVal, setNameVal] = useState(name);
  const [ageVal, setAgeVal] = useState(age);
  const { editUserStatus } = useSelector(selectUsers);
  const dispatch = useDispatch();

  const onNameChange = (event) => {
    setNameVal(event.target.value);
  };

  const onAgeChange = (event) => {
    setAgeVal(event.target.value);
  };

  const onApplyChanges = () => {
    dispatch(updateUser(id, nameVal, ageVal));
  };

  return (
    <div className={"user-edit-modal user-modal"}>
      <input
        type="text"
        className="search-bar-input form-control"
        placeholder={"Name"}
        value={nameVal}
        onChange={(event) => onNameChange(event)}
      />
      <input
        type="text"
        className="search-bar-input form-control"
        placeholder={"Age"}
        value={ageVal}
        onChange={(event) => onAgeChange(event)}
      />
      <div>
        <button onClick={() => onApplyChanges()} className={"btn apply-btn"}>
          Apply
        </button>
        <div>{editUserStatus}</div>
        <button
          onClick={() => setEditPanelStatus(false)}
          className={"btn cancel-btn"}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditUserModal;
