import React from "react";
import Category from "../category/category.component";
import CATEGORIES from "../../data/categories";
import "./categories.styles.scss";

class Categories extends React.Component {
  state = {
    sections: CATEGORIES,
  };

  render() {
    return (
      <div className="categories">
        {this.state.sections.map(({ id, ...obj }) => (
          <Category key={id} {...obj} />
        ))}
      </div>
    );
  }
}

export default Categories;
