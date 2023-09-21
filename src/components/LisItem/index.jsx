import React from "react";
import "./styles.css";

import "../../App.css";

const ListItem = ({ name, description }) => {
  return (
    <div className="list-item-div">
      <p className="name text-ellipsis">{name}</p>
      <p className="desc text-ellipsis">{description}</p>
    </div>
  );
};

export default ListItem;
