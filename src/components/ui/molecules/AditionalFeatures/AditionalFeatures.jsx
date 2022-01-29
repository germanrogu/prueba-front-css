import React from "react";
import { FinishBox } from "../../atoms/FinishBox/FinishBox";
import '../../atoms/FinishBox/FinishBox.css'

export const AditionalFeatures = ({ product }) => {
  
  return (
    <>
      <h5 className="finish-box">Choose your finish</h5>
      {product ? (
        <>
          {product.map((element, index) => (
            <div key={index} className="finish-box">
              <FinishBox
                name={element.name}
                description={element.description}
              />
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
};
