import React from "react";
import Product from "../../components/product/product.component";
import PRODUCTS from "../../data/products";
import "./products.styles.scss";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: PRODUCTS,
    };
  }

  render() {
    return this.state.products.map(({ items, id, title }) => {
      return (
        <div key={id} className="products">
          <h1 className="products__header">{title}</h1>
          <div className="products__tile">
            {items
              .filter((_, index) => {
                return index < 4;
              })
              .map(({ name, id, ...rest }) => {
                return <Product key={id} name={name} {...rest} />;
              })}
          </div>
        </div>
      );
    });
  }
}

export default Products;
