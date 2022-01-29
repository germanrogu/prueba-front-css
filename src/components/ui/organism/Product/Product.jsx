import React, { useEffect, useState } from "react";
import { Logo } from "../../atoms/Logo/Logo";
import { ItemDetail } from "../../molecules/ItemDetail/ItemDetail";
import logo from "../../../../img/serempreLogo.jpg";
import { Footer } from "../../molecules/Footer/Footer";

export const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getProduct = fetch(
      "https://frontend-interview-api-sepia.vercel.app/api/items"
    );
    getProduct
      .then((response) => response.json())
      .then((item) => {
        item.map((element) => setProduct(element));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(product);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Logo Logo={logo} />
          <hr className="solid"></hr>
          <ItemDetail product={product} />
          <Footer  product={product}/>
        </>
      )}
    </>
  );
};
