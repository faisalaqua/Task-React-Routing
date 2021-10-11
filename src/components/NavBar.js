import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img src="https://uploads.turbologo.com/uploads/design/hq_preview_image/965291/draw_svg20210507-22909-14tgwma.svg.png" />
      </Link>
      <Link to="/ProductList">
        <h1>Products</h1>
      </Link>
    </div>
  );
}

export default NavBar;
