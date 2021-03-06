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
      <Tabs name="" heading={() => ""}>
          <Tabs.Tab name="Description"
                    initialActive={true}
                    heading={() => "Description"} >
            <p>{product.description}</p>
          </Tabs.Tab>

          <Tabs.Tab
              name="Reviews" heading={() => "Reviews"}>
              <ul className="product-reviews">
                  {product.reviews.map( review => (
                      <li key={review.reviewer}>
                          <i>"{review.comment}"</i> - {review.reviewer}
                      </li>
                  ))}
              </ul>
          </Tabs.Tab>
      </Tabs>

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