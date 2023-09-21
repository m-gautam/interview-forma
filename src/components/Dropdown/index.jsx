import React from "react";
import "./styles.css";

const Dropdown = ({ vendorsList, handleOptionSelect }) => {
  return (
    <div className="dropdown-container">
      <select
        className="dropdown"
        name="vendors-select"
        id="vendors-select-id"
        onChange={(e) => handleOptionSelect(e.target.value)}
        defaultValue="all"
      >
        <option key="all" value="all">
          All
        </option>
        {vendorsList.map((vendor) => (
          <option key={vendor.id} value={vendor.name}>
            {vendor.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
