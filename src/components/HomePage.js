import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>reviewing react fundamentals</h1>
      <p>react, flux, and react router for ultra-responsive web apps</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
};

export default HomePage;
