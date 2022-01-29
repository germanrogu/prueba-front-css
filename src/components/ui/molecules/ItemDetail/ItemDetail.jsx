import React, { useEffect, useState } from "react";
import { ImageGrid } from "../../atoms/ImageGrid/ImageGrid";
import { MainImage } from "../../atoms/MainImage/MainImage";
import { ProductInformation } from "../ProductInformation/ProductInformation";
import './ItemDetail.css'

export const ItemDetail = ({ product }) => {
  const { images } = product;

  const [selectedImage, setSelectedImage] = useState(0);
  const [mainImage, setMainImage] = useState([]);

  useEffect(() => {
    if (images) {
      let src = images.map((element) => element.x3);
      setMainImage(src);
    }
  }, [images]);

  return (
    <section  className="complete">
      <div className="main-image">
        <MainImage src={mainImage[selectedImage]} />
        <ImageGrid
          images={images}
          onSelect={setSelectedImage}
          selectedImage={selectedImage}
        />
      </div>
      <div className="product-information">
        <ProductInformation product={product}/>
      </div>
    </section >
  );
};
