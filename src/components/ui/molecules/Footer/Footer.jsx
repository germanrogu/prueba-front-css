import React from "react";
import "./Footer.css";

export const Footer = ({ product: { price } }) => {
  return (
    <footer>
      <div className="container_footer">
        <div className="box_footer">
          <div className="title">
            <p>Free Shipping</p>
          </div>
          <div className="description">
            <p>Get 2-day free shipping anywhere in North America.</p>
          </div>
        </div>
        <div className="box_footer">
          <div className="title">
            <p>2 years warranty</p>
          </div>
          <div className="description">
            <p>
              If anything goes wrong in the first two years, we'll replace it
              for free.
            </p>
          </div>
        </div>
        <div className="box_footer">
          <div className="price">
            <h4>{"$" + price}</h4>
          </div>
          <div className="description">
            <p>Need financing? Learn more</p>
          </div>
          
        </div>
        <button className="button-3" >Buy now</button>
        
        
      </div>
    </footer>
  );
};
