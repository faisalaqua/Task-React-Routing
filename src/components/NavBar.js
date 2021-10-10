import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/ProductList">
        <h1>Products</h1>
      </Link>
    </div>
  );
}

export default NavBar;
