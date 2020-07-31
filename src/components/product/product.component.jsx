import React from "react";
import "./product.styles.scss";

let Product = ({ name, imageUrl, price }) => {
  return (
    <div className="product">
      <img className="product__image" src={imageUrl} />
      <div className="product__footer">
        <div className="product__name">{name}</div>
        <div className="product__price">&#x20B9;{`${price}0`}</div>
      </div>
    </div>
  );
};

export default Product;
