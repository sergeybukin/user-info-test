import React from "react";
import "./user-products.scss";

const UserProducts = ({ data }) => {
  const onRemoveProduct = () => {

  }

  if (data.length > 0) {
    return (
      <ul className="list-group list-group-flush user-products">
        <p className={"subtitle-middle"}>Products list</p>
        {data.map(({ id, name }) => (
          <li key={id} className="list-group-item">
            {name}
            <span onClick={() => onRemoveProduct(id)}>
              <i className="bi bi-x-circle"></i>
            </span>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <ul className="list-group list-group-flush user-products">
        <p className={"subtitle-middle"}>Products list</p>
        <li className={"list-group-item"}>User doesn't have any products</li>
      </ul>
    );
  }
};

export default UserProducts;
