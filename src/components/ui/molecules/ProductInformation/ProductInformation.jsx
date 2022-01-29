import React from "react";
import { Tabs } from "../../atoms/Tabs/Tabs";
import "../ItemDetail/ItemDetail.css";

export const ProductInformation = ({
  product: { title, price, description, details },
  ad = "NEW RELEASE",
}) => {
  return (
    <div className="container-product">
      <p>{ad}</p>
      <div className="information">
        <h1 className="product_title">{title}</h1>
        <h3 className="product_description">{description}</h3>
        <h4 className="starting">STARTING AT</h4>
        <h3 className="product_price">{"$ " + price}</h3>
      </div>
        <Tabs details={details} />
    </div>
  );
};
