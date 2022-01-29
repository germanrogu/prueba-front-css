import React from "react";

export const MainImage = ({ src }) => {
  return (
    <img
      src={src}
      height={320}
      // width="55%"
      alt="images"
      style={{
        width:"480px",
        objectFit: "contain",
        border: "2px solid #eee" ,
        borderRadius: "10px",
      }}
    />
  );
};
