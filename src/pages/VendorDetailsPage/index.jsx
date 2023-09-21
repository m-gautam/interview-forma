import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVendorDetails } from "../../apis/fetchVendorDetails";
import Card from "../../components/Card";
import "./styles.css";
import edit from "../../images/edit.png";
import { updateVendorDetails } from "../../apis/updateVendorDetails";
import Header from "../../components/Header";
import "../../App.css";

const VendorDetailsPage = () => {
  const params = useParams();
  const [vendorDetails, setVendorDetails] = useState({});
  const [vendorName, setVendorName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(false);

  const fetchVendorDetailsApi = async () => {
    const res = await fetchVendorDetails(params.id);
    setVendorDetails(res);
    setVendorName(res.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (vendorName === "") {
      setError(true);
      return;
    }

    let updatedVendorDetailsObj = vendorDetails;
    updatedVendorDetailsObj.name = vendorName;
    await updateVendorDetails(vendorDetails.id, updatedVendorDetailsObj);
    setIsEditing(false);
  };

  useEffect(() => {
    fetchVendorDetailsApi();
  }, []);

  return (
    <div className="detais-container">
      <Header />
      <div className="vendor-header">
        {isEditing ? (
          <div>
            <form onSubmit={handleSubmit} method="put">
              <input
                name="vendorName"
                defaultValue={vendorDetails?.name}
                value={vendorName}
                onChange={(e) => setVendorName(e.target.value)}
                className="vedor-name-input"
              />
              {error && <p className="error-text">Empty string not allowed</p>}
            </form>
          </div>
        ) : (
          <>
            <p title={vendorDetails?.name} className="title text-ellipsis">
              {vendorDetails?.name}
            </p>
            <img
              className="edit-icon"
              src={edit}
              alt="edit-logo"
              height={20}
              onClick={() => setIsEditing(true)}
            />
          </>
        )}
      </div>
      <p className="content">{vendorDetails?.description}</p>
      <p className="title">Products</p>
      <div className="products-container">
        {vendorDetails?.products?.map((product, idx) => (
          <Card key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default VendorDetailsPage;
