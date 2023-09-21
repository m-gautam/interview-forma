import React, { useEffect, useState } from "react";
import { fetchVendorsList } from "../../apis/fetchVendorsList";
import "./styles.css";
import sortIcon from "../../images/sort.png";
import { filterList, sortVendorsList } from "../../utils";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Dropdown from "../../components/Dropdown";
import ListItem from "../../components/LisItem";

const LandingPage = () => {
  const [vendors, setVendors] = useState([]);
  const [allVendors, setAllVendors] = useState([]);
  const [sort, setSort] = useState("asc");
  const navigate = useNavigate();

  const fetchVendorsApi = async () => {
    const vendors = await fetchVendorsList();
    const sortedList = sortVendorsList(vendors, sort);
    setVendors(sortedList);
    setAllVendors(sortedList);
  };

  const sortIconHandler = () => {
    let sortOrder = sort;
    if (sort === "asc") {
      sortOrder = "desc";
    } else {
      sortOrder = "asc";
    }
    setSort(sortOrder);

    const sortedList = sortVendorsList(vendors, sortOrder);
    setVendors(sortedList);
  };

  const handleFilter = async (value) => {
    const data = filterList(allVendors, value);
    console.log({ data });
    setVendors(data);
  };

  useEffect(() => {
    fetchVendorsApi();
  }, []);

  return (
    <div>
      <Header />
      <div className="filters">
        <Dropdown vendorsList={allVendors} handleOptionSelect={handleFilter} />
        <img
          style={{ cursor: "pointer" }}
          src={sortIcon}
          alt="sort_icon"
          height={36}
          width={36}
          onClick={sortIconHandler}
          className={sort === "asc" ? "sort-icon-direc sort-icon" : "sort-icon"}
        />
      </div>
      <div className="list-view">
        {vendors?.map((vendor) => (
          <div
            key={vendor.id}
            onClick={() =>
              navigate(`${vendor.id}`, {
                state: vendor.id,
              })
            }
          >
            <ListItem name={vendor.name} description={vendor.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
