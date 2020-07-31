import React from "react";
import { withRouter } from "react-router-dom";
import "./category.styles.scss";

let Category = ({ title, imageUrl, size, linkUrl, history, match }) => {
  let class_name = "category";
  if (size) class_name = `${class_name} ${class_name}--${size}`;

  const navigateTo = () => {
    if (linkUrl) history.push(`${match.url}${linkUrl}`);
  };

  return (
    <div className={class_name} onClick={navigateTo}>
      {/* to scale image don't add it to container */}
      <div
        className="category__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category__content">
        <h1 className="category__title">{title.toUpperCase()}</h1>
        <span className="category__subtitle">Shop Now</span>
      </div>
    </div>
  );
};

Category = withRouter(Category);

export default Category;
