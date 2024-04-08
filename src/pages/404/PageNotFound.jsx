import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>Oops! Page not found</p>
      <Link to="/" className="home-button">
        Go to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
