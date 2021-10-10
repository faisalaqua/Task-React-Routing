import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";

function Detail() {
  const detail = useParams().dataSlug;

  const cookie = products.find((cookie) => cookie.slug === detail);
  console.log(cookie);
  return (
    <div className="detail">
      <>
        <h5>{cookie.name}</h5>
        <img src={cookie.image} alt="cookie" />
        <p>{cookie.price} KD</p>
        <p>{cookie.description}</p>
      </>
    </div>
  );
}

export default Detail;

//useParam is used to call the slug from apps which came from ProductItem
