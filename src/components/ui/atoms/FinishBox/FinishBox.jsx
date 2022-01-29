import React from "react";
import "./FinishBox.css";
export const FinishBox = ({ name, description }) => {
  return (
    <>
      <div className="card">
        <div className="container">
          <h4 className="name">{name}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
