import React from "react";
import "./categories.styles.scss";

const Category = ({ title, imageUrl, size }) => {
  let class_name = "category";
  if (size) class_name = `${class_name} ${class_name}--${size}`;
  return (
    <div className={class_name}>
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

class Categories extends React.Component {
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "hats",
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "",
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "",
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        linkUrl: "",
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
        linkUrl: "",
      },
    ],
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
