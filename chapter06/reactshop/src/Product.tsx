import * as React from "react";

import { IProduct } from "./ProductsData";
import Tabs from "./Tabs";

interface IProps {
    product: IProduct;
    inBasket: boolean;
    onAddToBasket: () => void;
}

const Product: React.FC<IProps> = props => {

  const product = props.product;

  const handleAddClick = () => {
      props.onAddToBasket();
  };

  return (<React.Fragment>
      <h1>{product.name}</h1>
      <Tabs name="">
          <Tabs.Tab name="Description" initialActive={true}>
              <b>Description</b>
          </Tabs.Tab>
          <Tabs.Tab name="Reviews">Reviews</Tabs.Tab>
      </Tabs>
      <p>{product.description}</p>
      <div className="product-reviews">
          { product.reviews.map( review => (
              <li key={review.reviewer} className="product-reviews-item">
                  <i>"{review.comment}"</i> - {review.reviewer}
              </li>
            ))
          }
      </div>
      <p className="product-price">
          {
              new Intl.NumberFormat("en-US", {
                  currency: "USD",
                  style: "currency"
              }).format(product.price)
          }
      </p>
      {!props.inBasket && (
          <button onClick={handleAddClick}>
              Add to the basket
          </button>
      )}
            </React.Fragment>);
};

export default Product;