import React, { useState } from "react";
import "./styles.css";
import placeholder from "../../images/placeholder.jpg";

const Card = ({ product }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className="card-container">
      <img
        src={isLoaded ? product.image_url : placeholder}
        alt="product_logo"
        width={100}
        height={100}
        className="product-image"
        onLoad={handleImageLoaded}
      />
      <div className="product-description-div">
        <div>
          <p title={product?.name}>{product?.name}</p>
          <p>${product.price}</p>
        </div>
        {product.is_subscription ? (
          <p className="subs-text">Subscription available</p>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
