import React from "react";
import Categories from "../../components/categories/categories.component";
import "./homepage.styles.scss";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <Categories />
    </div>
  );
};

export default HomePage;
