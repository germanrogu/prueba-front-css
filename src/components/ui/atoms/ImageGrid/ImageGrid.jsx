import React from "react";

export const ImageGrid = ({ images = [], onSelect, selectedImage }) => {
  const src = images.map((element) => (element.x1));

  return (
    <div className="image-grid">
      {src.map((image, index) => (
        <img
          key={index}
          onClick={() => onSelect(index)}
          src={image}
          height={75}
          alt="images"
          style={{
            border:
              index === selectedImage
                ? "2px solid #000000"
                : "0.5px solid #eee",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
};
